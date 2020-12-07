$( "#from" ).datepicker({
    dateFormat: 'dd-mm-yy',
    onSelect: function() {
      var fromDate = $('#from').datepicker("getDate");
      var toDate = new Date(fromDate.getFullYear(), fromDate.getMonth(),fromDate.getDate() + 3);
      $('#to').datepicker("setDate", new Date(toDate));
    }
  });

  $( "#to" ).datepicker({
    dateFormat: 'dd-mm-yy'
  });