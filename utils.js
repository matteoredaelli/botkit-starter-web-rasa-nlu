array2string = function(data) {
  var out = "";
  if (data && "url" in data && "title" in data) {
      out = data.title + " ( " + data.url + " ) ";
  }
  for (var key in data) {
    if (key !== "title" && key !== "url" && data[key]) {
      out = out + " " + key + ':' + data[key];
    }
  };
  return out;
}

array2string_html = function(data) {
  var out = "";
  if (data && "url" in data) {
    out = out + " <a href=\"" + data.url + "\">" + data.title + "</a>";
  }
  for (var key in data) {
    if (key !== "title" && key !== "url" && data[key]) {
      out = out + " " + key + ':' + data[key];
    }
  };
  return out;
}

exports.arraylist2string = function(data) {
    var out = ""
    for (var i = 0; i < data.length; i++) {
	out = out + array2string_html(data[i]) + "  ";
    };
    return out;
}

exports.arraylist2string_html = function(data) {
    var out = "<ul>"
    for (var i = 0; i < data.length; i++) {
	out = out + "<li>" + array2string_html(data[i]) + "</li>";
    };
    return out + "</ul>";
}

exports.subset = function(obj, propList) {
  return propList.reduce(function(newObj, prop) {
    obj.hasOwnProperty(prop) && (newObj[prop] = obj[prop]);
    return newObj;
  }, {});
}
