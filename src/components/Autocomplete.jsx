const Autocomplete = ({ setInputValue }) => {


  $(() => {

    let autocomplete = new google.maps.places.Autocomplete($("#city")[0]);
    autocomplete.setTypes(['(cities)']);


    $("#weatherForm").submit(async (e) => {

      e.preventDefault();

      let actualValue = $("#city").val();

      setInputValue(await actualValue)


      $("#city").val('');

    });
  });

}

export default Autocomplete