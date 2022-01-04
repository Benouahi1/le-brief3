
//Reservation
let div1 = document.createElement("footer");


var Choisir1 = document.getElementById("choisir1");
document.getElementById("moto").onclick = function() {
        Choisir1.style.display = "none";

        let title = document.createElement("p");
        title.innerHTML = "Electrique: +5% par monttans";
        let button = document.createElement("button");
        button.innerHTML = "suivant";
        button.setAttribute("id", "myId");
        document.getElementById("cree-E").appendChild(title);
        document.getElementById("cree-E").appendChild(button);

        let title1 = document.createElement("p");
        title1.innerHTML = "Essance: +9% par monttans";
        let button1 = document.createElement("button");
        button1.innerHTML = "Suivant";
        button1.setAttribute("id", "myId");
        document.getElementById("cree-E").appendChild(title1);
        document.getElementById("cree-E").appendChild(button1);
        
    button.onclick = function() {
            title.style.display = "none"
            title1.style.display = "none"
            button.style.display = "none"
            button1.style.display = "none"
            let title2 = document.createElement("p");
            title2.innerHTML = "Combien de jours souhaitez-vous prendre le véhicule ?";
            let v = document.createElement("input");
              v.setAttribute("id", "num");
              document.getElementById("cree-E").appendChild(title2);
              document.getElementById("cree-E").appendChild(v);
              let Button2 = document.createElement("button");
              Button2.setAttribute("id", "myId");
              Button2.innerHTML = "Send";
              document.getElementById("cree-E").appendChild(Button2);
            
     Button2.onclick = function() {
                    title2.style.display = "none";
                    v.style.display = "none";
                    Button2.style.display = "none";
                    var x=v.value;
                    var y=10*(5/100);
                    var z=y+10;
                    x=x*z;
                    let title3 = document.createElement("p");
                    title3.innerHTML = "Monttans"+x+" £";
                    document.getElementById("cree-E").appendChild(title3);
                    let Button5 = document.createElement("button");
              Button5.setAttribute("id", "myId");
              Button5.innerHTML = "suivant";
              document.getElementById("cree-E").appendChild(Button5);
              Button5.onclick = function() {
                document.getElementById("cree-E").style.display = "none";
                Choisir1.style.display = "flex";

              }
                    
                  }
          }
          button1.onclick =function() {
            title.style.display = "none"
            title1.style.display = "none"
            button.style.display = "none"
            button1.style.display = "none"
            let title2 = document.createElement("p");
            title2.innerHTML = "Combien de jours souhaitez-vous prendre le véhicule ?";
            let v = document.createElement("input");
              v.setAttribute("id", "num");
              document.getElementById("cree-E").appendChild(title2);
              document.getElementById("cree-E").appendChild(v);
              let Button2 = document.createElement("button");
              Button2.setAttribute("id", "myId");
              Button2.innerHTML = "Send";
              document.getElementById("cree-E").appendChild(Button2);
            
                  Button2.onclick = function() {
                    title2.style.display = "none";
                    v.style.display = "none";
                    Button2.style.display = "none";
                  
                    var x=v.value;
                    var y= 10*(14/100);
                    var z=10+y;
                    x=x*z;
                    let title3 = document.createElement("p");
                    title3.innerHTML = "Monttans "+x+" £";
                    document.getElementById("cree-E").appendChild(title3);
                    document.getElementById("cree-E").appendChild(title3);
                    let Button5 = document.createElement("button");
              Button5.setAttribute("id", "myId");
              Button5.innerHTML = "suivant";
              document.getElementById("cree-E").appendChild(Button5);
              Button5.onclick = function() {
                document.getElementById("cree-E").style.display = "none";
                Choisir1.style.display = "flex";

              }
                  
                  }


          }
}


document.getElementById("citadine").onclick = function() {

  Choisir1.style.display = "none";

  let titr1 = document.createElement("p");
          titr1.innerHTML = "Electrique: +5% par monttans";
          
    let BO1 = document.createElement("button");
              BO1.setAttribute("id", "myId");
              BO1.innerHTML = "suivant";
              document.getElementById("cree-E").appendChild(titr1);
              document.getElementById("cree-E").appendChild(BO1);
 let titr2 = document.createElement("p");
              titr2.innerHTML = "Hybred : +9% par monttans";
             
 let BO2 = document.createElement("button");
                  BO2.setAttribute("id", "myId");
                  BO2.innerHTML = "suivant";
                  document.getElementById("cree-E").appendChild(titr2);
                  document.getElementById("cree-E").appendChild(BO2);
  let titr3 = document.createElement("p");
                  titr3.innerHTML = "Essance: +14% par monttans";
                  
 let BO3 = document.createElement("button");
                      BO3.setAttribute("id", "myId");
                      BO3.innerHTML = "suivant";
                      document.getElementById("cree-E").appendChild(titr3);
                      document.getElementById("cree-E").appendChild(BO3);
   let titr4 = document.createElement("p");
                      titr4.innerHTML = "Diesel: +21% par monttans";
                     
     let BO4 = document.createElement("button");
                          BO4.setAttribute("id", "myId");
                          BO4.innerHTML = "suivant";
                          document.getElementById("cree-E").appendChild(titr4);
                          document.getElementById("cree-E").appendChild(BO4);
    
    BO1.onclick = function() {
      
      titr1.style.display = "none";
      titr2.style.display = "none";
      titr3.style.display = "none";
      titr4.style.display = "none";
      BO1.style.display = "none";
      BO2.style.display = "none";
      BO3.style.display = "none";
      BO4.style.display = "none";

      let title2 = document.createElement("p");
      title2.innerHTML = "Combien de jours souhaitez-vous prendre le véhicule ?";
      let v = document.createElement("input");
        v.setAttribute("id", "num");
        document.getElementById("cree-E").appendChild(title2);
        document.getElementById("cree-E").appendChild(v);
        let Button2 = document.createElement("button");
        Button2.setAttribute("id", "myId");
        Button2.innerHTML = "Send";
        document.getElementById("cree-E").appendChild(Button2);
     Button2.onclick = function (){
      title2.style.display = "none";
      v.style.display = "none";
      Button2.style.display = "none";
     
          var x=v.value;
          var y=12*(5/100);
          var z=12+y;
          var x=x*z;
          let title3 = document.createElement("p");
          title3.innerHTML = "Monttans "+x+" £";
          document.getElementById("cree-E").appendChild(title3);
         
          let Button5 = document.createElement("button");
          Button5.setAttribute("id", "myId");
          Button5.innerHTML = "suivant";
          document.getElementById("cree-E").appendChild(Button5);
          Button5.onclick = function() {
            document.getElementById("cree-E").style.display = "none";
            Choisir1.style.display = "flex";

          }
        }
      }
     
   BO2.onclick = function() {
      
        titr1.style.display = "none";
        titr2.style.display = "none";
        titr3.style.display = "none";
        titr4.style.display = "none";
        BO1.style.display = "none";
        BO2.style.display = "none";
        BO3.style.display = "none";
        BO4.style.display = "none";
  
        let title2 = document.createElement("p");
        title2.innerHTML = "Combien de jours souhaitez-vous prendre le véhicule ?";
        let v = document.createElement("input");
          v.setAttribute("id", "num");
          document.getElementById("cree-E").appendChild(title2);
          document.getElementById("cree-E").appendChild(v);
          let Button2 = document.createElement("button");
          Button2.setAttribute("id", "myId");
          Button2.innerHTML = "Send";
          document.getElementById("cree-E").appendChild(Button2);
       Button2.onclick = function (){
       
        title2.style.display = "none";
        v.style.display = "none";
        Button2.style.display = "none";

            var x=v.value;
            var y=12*(9/100);
            var z=12+y;
            var x=x*z;
            let title3 = document.createElement("p");
            title3.innerHTML = "Monttans "+x+" £";
            document.getElementById("cree-E").appendChild(title3);

            let Button5 = document.createElement("button");
              Button5.setAttribute("id", "myId");
              Button5.innerHTML = "suivant";
              document.getElementById("cree-E").appendChild(Button5);
              Button5.onclick = function() {
                document.getElementById("cree-E").style.display = "none";
                Choisir1.style.display = "flex";

              }
  
          }
        }

        BO3.onclick = function() {
      
          titr1.style.display = "none";
          titr2.style.display = "none";
          titr3.style.display = "none";
          titr4.style.display = "none";
          BO1.style.display = "none";
          BO2.style.display = "none";
          BO3.style.display = "none";
          BO4.style.display = "none";
    
          let title2 = document.createElement("p");
          title2.innerHTML = "Combien de jours souhaitez-vous prendre le véhicule ?";
          let v = document.createElement("input");
            v.setAttribute("id", "num");
            document.getElementById("cree-E").appendChild(title2);
            document.getElementById("cree-E").appendChild(v);
            let Button2 = document.createElement("button");
            Button2.setAttribute("id", "myId");
            Button2.innerHTML = "Send";
            document.getElementById("cree-E").appendChild(Button2);
         Button2.onclick = function (){
          title2.style.display = "none";
          v.style.display = "none";
          Button2.style.display = "none";
         
              var x=v.value;
              var y=12*(14/100);
              var z=12+y;
              var x=x*z;
              let title3 = document.createElement("p");
              title3.innerHTML = "Monttans "+x+" £";
              document.getElementById("cree-E").appendChild(title3);

              let Button5 = document.createElement("button");
              Button5.setAttribute("id", "myId");
              Button5.innerHTML = "suivant";
              document.getElementById("cree-E").appendChild(Button5);
              Button5.onclick = function() {
                document.getElementById("cree-E").style.display = "none";
                Choisir1.style.display = "flex";

              }
    
            }
          }

          BO4.onclick = function() {
      
            titr1.style.display = "none";
            titr2.style.display = "none";
            titr3.style.display = "none";
            titr4.style.display = "none";
            BO1.style.display = "none";
            BO2.style.display = "none";
            BO3.style.display = "none";
            BO4.style.display = "none";
      
            let title2 = document.createElement("p");
            title2.innerHTML = "Combien de jours souhaitez-vous prendre le véhicule ?";
            let v = document.createElement("input");
              v.setAttribute("id", "num");
              document.getElementById("cree-E").appendChild(title2);
              document.getElementById("cree-E").appendChild(v);
              let Button2 = document.createElement("button");
              Button2.setAttribute("id", "myId");
              Button2.innerHTML = "Send";
              document.getElementById("cree-E").appendChild(Button2);
           Button2.onclick = function (){
            title2.style.display = "none";
            v.style.display = "none";
            Button2.style.display = "none";
           
                var x=v.value;
                var y=12*(21/100);
                var z=12+y;
                var x=x*z;
                let title3 = document.createElement("p");
                title3.innerHTML = "Monttans "+x+" £";
                document.getElementById("cree-E").appendChild(title3);

                let Button5 = document.createElement("button");
              Button5.setAttribute("id", "myId");
              Button5.innerHTML = "suivant";
              document.getElementById("cree-E").appendChild(Button5);
              Button5.onclick = function() {
                document.getElementById("cree-E").style.display = "none";
                Choisir1.style.display = "flex";

              }
      
              }
            }
}




document.getElementById("compact").onclick = function(){
 
  Choisir1.style.display = "none";

  
 let titr2 = document.createElement("p");
              titr2.innerHTML = "Hybred: +9% par monttans";
             
 let BO2 = document.createElement("button");
                  BO2.setAttribute("id", "myId");
                  BO2.innerHTML = "suivant";
                  document.getElementById("cree-E").appendChild(titr2);
                  document.getElementById("cree-E").appendChild(BO2);
  let titr3 = document.createElement("p");
                  titr3.innerHTML = "Essance: +14% par monttans";
                  
 let BO3 = document.createElement("button");
                      BO3.setAttribute("id", "myId");
                      BO3.innerHTML = "suivant";
                      document.getElementById("cree-E").appendChild(titr3);
                      document.getElementById("cree-E").appendChild(BO3);
   let titr4 = document.createElement("p");
                      titr4.innerHTML = "Diesel +21% par monttans";
                     
     let BO4 = document.createElement("button");
                          BO4.setAttribute("id", "myId");
                          BO4.innerHTML = "suivant";
                          document.getElementById("cree-E").appendChild(titr4);
                          document.getElementById("cree-E").appendChild(BO4);
    
     
   BO2.onclick = function() {
      
    
        titr2.style.display = "none";
        titr3.style.display = "none";
        titr4.style.display = "none";
        
        BO2.style.display = "none";
        BO3.style.display = "none";
        BO4.style.display = "none";
  
        let title2 = document.createElement("p");
        title2.innerHTML = "Combien de jours souhaitez-vous prendre le véhicule ?";
        let v = document.createElement("input");
          v.setAttribute("id", "num");
          document.getElementById("cree-E").appendChild(title2);
          document.getElementById("cree-E").appendChild(v);
          let Button2 = document.createElement("button");
          Button2.setAttribute("id", "myId");
          Button2.innerHTML = "Send";
          document.getElementById("cree-E").appendChild(Button2);
       Button2.onclick = function (){

        title2.style.display = "none";
        v.style.display = "none";
        Button2.style.display = "none";
       
            var x=v.value;
            var y=14*(9/100);
            var z=14+y;
            var x=x*z;
            let title3 = document.createElement("p");
            title3.innerHTML = "Monttans "+x+" £";
            document.getElementById("cree-E").appendChild(title3);

            let Button5 = document.createElement("button");
              Button5.setAttribute("id", "myId");
              Button5.innerHTML = "suivant";
              document.getElementById("cree-E").appendChild(Button5);
              Button5.onclick = function() {
                document.getElementById("cree-E").style.display = "none";
                Choisir1.style.display = "flex";

              }
  
          }
        }

        BO3.onclick = function() {
      
          
          titr2.style.display = "none";
          titr3.style.display = "none";
          titr4.style.display = "none";
          
          BO2.style.display = "none";
          BO3.style.display = "none";
          BO4.style.display = "none";
    
          let title2 = document.createElement("p");
          title2.innerHTML = "Combien de jours souhaitez-vous prendre le véhicule ?";
          let v = document.createElement("input");
            v.setAttribute("id", "num");
            document.getElementById("cree-E").appendChild(title2);
            document.getElementById("cree-E").appendChild(v);
            let Button2 = document.createElement("button");
            Button2.setAttribute("id", "myId");
            Button2.innerHTML = "Send";
            document.getElementById("cree-E").appendChild(Button2);
         Button2.onclick = function (){

          title2.style.display = "none";
          v.style.display = "none";
          Button2.style.display = "none";

              var x=v.value;
              var y=14*(14/100);
              var z=14+y;
              var x=x*z;
              let title3 = document.createElement("p");
              title3.innerHTML = "Monttans "+x+" £";
              document.getElementById("cree-E").appendChild(title3);

              let Button5 = document.createElement("button");
              Button5.setAttribute("id", "myId");
              Button5.innerHTML = "suivant";
              document.getElementById("cree-E").appendChild(Button5);
              Button5.onclick = function() {
                document.getElementById("cree-E").style.display = "none";
                Choisir1.style.display = "flex";

              }
    
            }
          }

          BO4.onclick = function() {
      
          
            titr2.style.display = "none";
            titr3.style.display = "none";
            titr4.style.display = "none";
           
            BO2.style.display = "none";
            BO3.style.display = "none";
            BO4.style.display = "none";
      
            let title2 = document.createElement("p");
            title2.innerHTML = "Combien de jours souhaitez-vous prendre le véhicule ?";
            let v = document.createElement("input");
              v.setAttribute("id", "num");
              document.getElementById("cree-E").appendChild(title2);
              document.getElementById("cree-E").appendChild(v);
              let Button2 = document.createElement("button");
              Button2.setAttribute("id", "myId");
              Button2.innerHTML = "Send";
              document.getElementById("cree-E").appendChild(Button2);
           Button2.onclick = function (){
            title2.style.display = "none";
            v.style.display = "none";
            Button2.style.display = "none";
           
                var x=v.value;
                var y=14*(21/100);
                var z=14+y;
                var x=x*z;
                let title3 = document.createElement("p");
                title3.innerHTML = "Monttans "+x+" £";
                document.getElementById("cree-E").appendChild(title3);

                let Button5 = document.createElement("button");
              Button5.setAttribute("id", "myId");
              Button5.innerHTML = "suivant";
              document.getElementById("cree-E").appendChild(Button5);
              Button5.onclick = function() {
                document.getElementById("cree-E").style.display = "none";
                Choisir1.style.display = "flex";

              }
      
              }
            }
}




document.getElementById("berlin").onclick = function(){
  Choisir1.style.display = "none";
  let automatique = document.createElement("p");
  automatique.innerHTML = "véhicule automatique seulement . il y aura un excès : 19%";
let Buttone1 = document.createElement("button");
Buttone1.setAttribute("id", "myId");
Buttone1.innerHTML = "suivant";
document.getElementById("cree-E").appendChild(automatique);
document.getElementById("cree-E").appendChild(Buttone1);
Buttone1.onclick = function() {
  automatique.style.display = "none";
  Buttone1.style.display = "none";

  let titr2 = document.createElement("p");
  titr2.innerHTML = "Hybred";
 
let BO2 = document.createElement("button");
      BO2.setAttribute("id", "myId");
      BO2.innerHTML = "suivant";
      document.getElementById("cree-E").appendChild(titr2);
      document.getElementById("cree-E").appendChild(BO2);
let titr3 = document.createElement("p");
      titr3.innerHTML = "Essance";
      
let BO3 = document.createElement("button");
          BO3.setAttribute("id", "myId");
          BO3.innerHTML = "suivant";
          document.getElementById("cree-E").appendChild(titr3);
          document.getElementById("cree-E").appendChild(BO3);
let titr4 = document.createElement("p");
          titr4.innerHTML = "Diesel";
         
let BO4 = document.createElement("button");
              BO4.setAttribute("id", "myId");
              BO4.innerHTML = "suivant";
              document.getElementById("cree-E").appendChild(titr4);
              document.getElementById("cree-E").appendChild(BO4);


BO2.onclick = function() {


titr2.style.display = "none";
titr3.style.display = "none";
titr4.style.display = "none";

BO2.style.display = "none";
BO3.style.display = "none";
BO4.style.display = "none";

let title2 = document.createElement("p");
title2.innerHTML = "Combien de jours souhaitez-vous prendre le véhicule ?";
let v = document.createElement("input");
v.setAttribute("id", "num");
document.getElementById("cree-E").appendChild(title2);
document.getElementById("cree-E").appendChild(v);
let Button2 = document.createElement("button");
Button2.setAttribute("id", "myId");
Button2.innerHTML = "Send";
document.getElementById("cree-E").appendChild(Button2);
Button2.onclick = function (){
  title2.style.display = "none";
  v.style.display = "none";
  Button2.style.display = "none";

var x=v.value;
var y=20*(9/100);
var z=20*(19/100);
var r= z+y+20;
var x=x*r;
let title3 = document.createElement("p");
title3.innerHTML = "Monttans "+x+" £";
document.getElementById("cree-E").appendChild(title3);

let Button5 = document.createElement("button");
              Button5.setAttribute("id", "myId");
              Button5.innerHTML = "suivant";
              document.getElementById("cree-E").appendChild(Button5);
              Button5.onclick = function() {
                document.getElementById("cree-E").style.display = "none";
                Choisir1.style.display = "flex";

              }

}
}

BO3.onclick = function() {


titr2.style.display = "none";
titr3.style.display = "none";
titr4.style.display = "none";

BO2.style.display = "none";
BO3.style.display = "none";
BO4.style.display = "none";

let title2 = document.createElement("p");
title2.innerHTML = "Combien de jours souhaitez-vous prendre le véhicule ?";
let v = document.createElement("input");
v.setAttribute("id", "num");
document.getElementById("cree-E").appendChild(title2);
document.getElementById("cree-E").appendChild(v);
let Button2 = document.createElement("button");
Button2.setAttribute("id", "myId");
Button2.innerHTML = "Send";
document.getElementById("cree-E").appendChild(Button2);
Button2.onclick = function (){
  title2.style.display = "none";
  v.style.display = "none";
  Button2.style.display = "none";

  var x=v.value;
  var y=20*(14/100);
  var z=20*(19/100);
  var r= z+y+20;
  var x=x*r;
  let title3 = document.createElement("p");
  title3.innerHTML = "Monttans "+x+" £";
  document.getElementById("cree-E").appendChild(title3);

  let Button5 = document.createElement("button");
              Button5.setAttribute("id", "myId");
              Button5.innerHTML = "suivant";
              document.getElementById("cree-E").appendChild(Button5);
              Button5.onclick = function() {
                document.getElementById("cree-E").style.display = "none";
                Choisir1.style.display = "flex";

              }

}
}

BO4.onclick = function() {


titr2.style.display = "none";
titr3.style.display = "none";
titr4.style.display = "none";

BO2.style.display = "none";
BO3.style.display = "none";
BO4.style.display = "none";

let title2 = document.createElement("p");
title2.innerHTML = "Combien de jours souhaitez-vous prendre le véhicule ?";
let v = document.createElement("input");
  v.setAttribute("id", "num");
  document.getElementById("cree-E").appendChild(title2);
  document.getElementById("cree-E").appendChild(v);
  let Button2 = document.createElement("button");
  Button2.setAttribute("id", "myId");
  Button2.innerHTML = "Send";
  document.getElementById("cree-E").appendChild(Button2);
Button2.onclick = function (){
  title2.style.display = "none";
  v.style.display = "none";
  Button2.style.display = "none";

    var x=v.value;
    var y=20*(21/100);
    var z=20*(19/100);
    var r= z+y+20;
    var x=x*r;
    let title3 = document.createElement("p");
    title3.innerHTML = "Monttans "+x+" £";
    document.getElementById("cree-E").appendChild(title3);

    let Button5 = document.createElement("button");
              Button5.setAttribute("id", "myId");
              Button5.innerHTML = "suivant";
              document.getElementById("cree-E").appendChild(Button5);
              Button5.onclick = function() {
                document.getElementById("cree-E").style.display = "none";
                Choisir1.style.display = "flex";

              }

  }
}

}

}

document.getElementById("utilitair").onclick = function() {
  Choisir1.style.display = "none";
  let T = document.createElement("p");
  T.innerHTML =" Il n'y a diesel que: +21% par monttans";
 
  let button1 = document.createElement("button");
  button1.setAttribute("id","myId");
  button1.innerHTML = "suivant";
  document.getElementById("cree-E").appendChild(T);
  document.getElementById("cree-E").appendChild(button1);

  button1.onclick = function() {
    button1.style.display = "none";
    T.style.display = "none";
    let title2 = document.createElement("p");
title2.innerHTML = "Combien de jours souhaitez-vous prendre le véhicule ?";
let v = document.createElement("input");
  v.setAttribute("id", "num");
  document.getElementById("cree-E").appendChild(title2);
  document.getElementById("cree-E").appendChild(v);
  let Button2 = document.createElement("button");
  Button2.setAttribute("id", "myId");
  Button2.innerHTML = "Send";
  document.getElementById("cree-E").appendChild(Button2);
    Button2.onclick = function (){
      title2.style.display = "none";
      v.style.display = "none";
      Button2.style.display = "none";

      var x=v.value;
      var y=16*(21/100);
      var r= y+16;
      var x=x*r;
      let title3 = document.createElement("p");
      title3.innerHTML = "Monttans "+x+" £";
      document.getElementById("cree-E").appendChild(title3);

      let Button5 = document.createElement("button");
              Button5.setAttribute("id", "myId");
              Button5.innerHTML = "suivant";
              document.getElementById("cree-E").appendChild(Button5);
              Button5.onclick = function() {
                document.getElementById("cree-E").style.display = "none";
                Choisir1.style.display = "flex";

              }
  
    }
  }
}



document.getElementById("engine").onclick = function(){
  Choisir1.style.display = "none";

        let title = document.createElement("p");
        title.innerHTML = "Essence: +14% par monttans";
        let button = document.createElement("button");
        button.innerHTML = "suivant";
        button.setAttribute("id", "myId");
        document.getElementById("cree-E").appendChild(title);
        document.getElementById("cree-E").appendChild(button);

        let title1 = document.createElement("p");
        title1.innerHTML = "Diesel: +21% par monttans";
        let button1 = document.createElement("button");
        button1.innerHTML = "Suivant";
        button1.setAttribute("id", "myId");
        document.getElementById("cree-E").appendChild(title1);
        document.getElementById("cree-E").appendChild(button1);
    button.onclick = function() {
            title.style.display = "none"
            title1.style.display = "none"
            button.style.display = "none"
            button1.style.display = "none"
            let title2 = document.createElement("p");
            title2.innerHTML = "Combien de jours souhaitez-vous prendre le véhicule ?";
            let v = document.createElement("input");
              v.setAttribute("id", "num");
              document.getElementById("cree-E").appendChild(title2);
              document.getElementById("cree-E").appendChild(v);
              let Button2 = document.createElement("button");
              Button2.setAttribute("id", "myId");
              Button2.innerHTML = "Send";
              document.getElementById("cree-E").appendChild(Button2);
            
     Button2.onclick = function() {
      title2.style.display = "none";
      v.style.display = "none";
      Button2.style.display = "none";
   
                    var x=v.value;
                    var y=900*(14/100);
                    var z=y+900;
                    x=x*z;
                    let title3 = document.createElement("p");
                    title3.innerHTML = "Monttans "+x+" £";
                    document.getElementById("cree-E").appendChild(title3);

                    let Button5 = document.createElement("button");
              Button5.setAttribute("id", "myId");
              Button5.innerHTML = "suivant";
              document.getElementById("cree-E").appendChild(Button5);
              Button5.onclick = function() {
                document.getElementById("cree-E").style.display = "none";
                Choisir1.style.display = "flex";

              }
                  }
          }
            button1.onclick =function() {
              title.style.display = "none"
              title1.style.display = "none"
              button.style.display = "none"
              button1.style.display = "none"
              let title2 = document.createElement("p");
              title2.innerHTML = "Combien de jours souhaitez-vous prendre le véhicule ?";
              let v = document.createElement("input");
                v.setAttribute("id", "num");
                document.getElementById("cree-E").appendChild(title2);
                document.getElementById("cree-E").appendChild(v);
                let Button2 = document.createElement("button");
                Button2.setAttribute("id", "myId");
                Button2.innerHTML = "Send";
                document.getElementById("cree-E").appendChild(Button2);
              
                    Button2.onclick = function() {
                      title2.style.display = "none";
                      v.style.display = "none";
                      Button2.style.display = "none";
                    
                      var x=v.value;
                      var y= 900*(21/100);
                      var z=900+y;
                      x=x*z;
                      let title3 = document.createElement("p");
                      title3.innerHTML = "Monttans "+x+" £";
                      document.getElementById("cree-E").appendChild(title3);

                      let Button5 = document.createElement("button");
              Button5.setAttribute("id", "myId");
              Button5.innerHTML = "suivant";
              document.getElementById("cree-E").appendChild(Button5);
              Button5.onclick = function() {
                document.getElementById("cree-E").style.display = "none";
                Choisir1.style.display = "flex";

              }
                    }


            }


  }

  document.getElementById("camion").onclick =function() {

         Choisir1.style.display = "none";
        let automatique = document.createElement("p")
        automatique.innerHTML = "véhicule automatique seulement . il y aura un excès : 19%";
       let Buttone1 = document.createElement("button");
        Buttone1.setAttribute("id", "myId");
        Buttone1.innerHTML = "suivant";
       document.getElementById("cree-E").appendChild(automatique);
      document.getElementById("cree-E").appendChild(Buttone1);
            Buttone1.onclick = function() {
            automatique.style.display = "none";
          Buttone1.style.display = "none";
          let titr2 = document.createElement("p");
          titr2.innerHTML = "Diesel";          
          let BO2 = document.createElement("button");
                    BO2.setAttribute("id", "myId");
                    BO2.innerHTML = "suivant";
                    document.getElementById("cree-E").appendChild(titr2);
                    document.getElementById("cree-E").appendChild(BO2);
                          BO2.onclick = function() {


                          titr2.style.display = "none";
                          BO2.style.display = "none";
                          let title2 = document.createElement("p");
                          title2.innerHTML = "Combien de jours souhaitez-vous prendre le véhicule ?";
                          let v = document.createElement("input");
                          v.setAttribute("id", "num");
                          document.getElementById("cree-E").appendChild(title2);
                          document.getElementById("cree-E").appendChild(v);
                          let Buttone2 = document.createElement("button");
                          Buttone2.setAttribute("id", "myId");
                          Buttone2.innerHTML = "Send";
                          document.getElementById("cree-E").appendChild(Buttone2);

                                    Buttone2.onclick = function() {
                                      title2.style.display = "none";
                                      v.style.display = "none";
                                      Buttone2.style.display = "none";

                                    var x=v.value;
                                    var y=250*(21/100);
                                    var z=250*(19/100);
                                    var r= z+y+250;
                                    var x=x*r;
                                    let title3 = document.createElement("p");
                                    title3.innerHTML = "Monttans "+x+" £";
                                    document.getElementById("cree-E").appendChild(title3);

                                    let Button5 = document.createElement("button");
                                            Button5.setAttribute("id", "myId");
                                          Button5.innerHTML = "suivant";
                                         document.getElementById("cree-E").appendChild(Button5);
                                          Button5.onclick = function() {
                                         document.getElementById("cree-E").style.display = "none";
                                         Choisir1.style.display = "flex";

              }

                                    }
                          }
            }

}