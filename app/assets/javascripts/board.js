$(function() {
  $(".cell").on("click", function() {
    var id = $(this).attr("id").split("_")[1],
      self = $(this);
    $.ajax({
      url: "/cells/" + id,
      method: "patch",
      success: function(response) {
        self.empty().append("O");
        // response.forEach()
        // test each cell for presence of content
        // if content, re-render cell
        console.log(response);
      },
      error: function() {
        alert("Already has content");
      }
    });
  })
});
