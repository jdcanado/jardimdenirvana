<template>
  <div app>
    <v-container id="index" grid-list-md text-xs-center fill-height>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-card-title class="headline mb-0">Sobre</v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <v-card-title class="headline mb-0">Subtítulo 1</v-card-title>
            <v-divider/>
            <v-card-text>{{ card_text }}</v-card-text>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <v-card-title class="headline mb-0">Subtítulo 2</v-card-title>
            <v-divider/>
            <v-card-text>{{ card_text_2 }}</v-card-text>
            <v-img
              src="https://demo.cloudimg.io/width/600/n/https://jolipage.airstore.io/img.jpg"
              aspect-ratio="2.75"
            ></v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
/*const {
  Stitch,
  RemoteMongoClient,
  UserPasswordCredential
} = require("mongodb-stitch-browser-sdk");

const client = Stitch.initializeDefaultAppClient("futapp-ziyzg");
const db = client
  .getServiceClient(RemoteMongoClient.factory, "jdc-futapp-mongodb-atlas")
  .db("futapp_db");
const credential = new UserPasswordCredential(
  "jdcanado@gmail.com",
  "Nir@14142135"
);

client.auth
  .loginWithCredential(credential)
  .then(user =>
    db
      .collection("equipe")
      .updateOne(
        { owner_id: client.auth.user.id },
        { $set: { number: 42 } },
        { upsert: true }
      )
  )
  .then(() =>
    db
      .collection("equipe")
      .find({ owner_id: client.auth.user.id }, { limit: 100 })
      .asArray()
  )
  .then(docs => {
    console.log("Found docs", docs);
    console.log("[MongoDB Stitch] Connected to Stitch");
  })
  .catch(err => {
    console.error(err);
  });

export default {
  data() {
    return {
      card_text:
        "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.",
      card_text_2:
        "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat."
    };
  },
  name: "Index"
};*/
</script>
