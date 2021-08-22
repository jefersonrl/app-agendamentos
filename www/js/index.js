var app = {
        
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById("btnInserir").addEventListener("click",app.inserir);  
    },

    inserir: function(){
        var db = firebase.firestore();
        var ag = db.collection("agendamentos");

        ag.add({
            nome: document.getElementById("txtNome").value,
            telefone: document.getElementById("txtTelefone").value,
            origem: document.getElementById("txtOrigem").value,
            data_contato: document.getElementById("txtDataContato").value,
            observacao: document.getElementById("txtObservacao").value
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }
    
};

app.initialize();