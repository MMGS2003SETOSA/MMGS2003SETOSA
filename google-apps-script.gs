/**
 * MMGS 2003 Set Old Students Association - member sign-up backend
 *
 * Saves the website's "Join the directory" form into a Google Sheet and lets
 * the website read back the public part of the list (never phone or email).
 *
 * Setup is in README.md, section "Connect the sign-up form".
 */

var SHEET_NAME = 'Members';
var HEADERS = ['Updated', 'ID', 'Full name', 'Phone', 'Email', 'Profession', 'Location', 'Skills', 'Willing to serve in', 'Photo', 'Show in directory'];
var MAX_ROWS_RETURNED = 400;

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#004d13').setFontColor('#ffffff');
  }
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function clean_(v, max) {
  v = String(v == null ? '' : v).replace(/[\u0000-\u001f]/g, ' ').trim();
  /* stop spreadsheet formula injection */
  if (/^[=+\-@]/.test(v)) v = "'" + v;
  return v.slice(0, max);
}

/* Website -> sheet */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    var d = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (!d.consent) return json_({ ok: false, error: 'consent required' });
    var name = clean_(d.name, 120), phone = clean_(d.phone, 40), email = clean_(d.email, 120);
    if (name.length < 3 || phone.replace(/\D/g, '').length < 7 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return json_({ ok: false, error: 'invalid details' });
    }
    var id = clean_(d.id, 40) || Utilities.getUuid();
    var photo = String(d.photo || '');
    if (!/^data:image\/jpeg;base64,[A-Za-z0-9+\/=]+$/.test(photo) || photo.length > 45000) photo = '';
    var row = [
      new Date(), id, name, phone, email,
      clean_(d.profession, 120), clean_(d.location, 120), clean_(d.skills, 200),
      (Array.isArray(d.serve) ? d.serve : []).map(function (s) { return clean_(s, 40); }).join(', '),
      photo, 'yes'
    ];
    var sh = getSheet_();
    var last = sh.getLastRow(), found = 0;
    if (last > 1) {
      var ids = sh.getRange(2, 2, last - 1, 1).getValues();
      for (var i = 0; i < ids.length; i++) if (String(ids[i][0]) === id) { found = i + 2; break; }
    }
    if (found) sh.getRange(found, 1, 1, row.length).setValues([row]);
    else sh.appendRow(row);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: 'server error' });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

/* Sheet -> website (public fields only) */
function doGet(e) {
  var sh = getSheet_();
  var last = sh.getLastRow();
  var members = [];
  if (last > 1) {
    var start = Math.max(2, last - MAX_ROWS_RETURNED + 1);
    var vals = sh.getRange(start, 1, last - start + 1, HEADERS.length).getValues();
    vals.forEach(function (r) {
      if (String(r[10]).toLowerCase() !== 'yes') return;
      members.push({
        id: String(r[1]), name: String(r[2]), profession: String(r[5]), location: String(r[6]), skills: String(r[7]),
        serve: String(r[8]) ? String(r[8]).split(', ') : [], photo: String(r[9]),
        at: r[0] instanceof Date ? r[0].getTime() : 0
      });
    });
  }
  return json_({ ok: true, members: members });
}
