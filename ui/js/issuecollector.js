loadScript("https://code.jquery.com/jquery-2.2.4.min.js", function() {
  jQuery.ajax({
    url:
      "https://jira.tiburondata.com/s/510de82fe11f8debf09626f25eb837bb-T/en_USp0g9dl/64022/167/1.4.26/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=8bd60590",
    type: "get",
    cache: true,
    dataType: "script"
  });
});
function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    //IE
    script.onreadystatechange = function() {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    //Others
    script.onload = function() {
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
