$(document).ready(function() {
  $('#bouton2').click(function() {
    function afficheDonnees() {
      var vitesse = $('#vitesse').val();
      $.ajax({
        url: 'donne.php',
        type: 'POST',
        data: 'vitesse=' + vitesse,
        dataType : 'html',
        success:function(data){
          $('#resultat').html('voici la vitesse fournit en réponse : ' +data);
        }
      }
    }
  }
});