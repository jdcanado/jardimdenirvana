<template>
	<div id="app">
		<v-app id="inspire">
			<v-app-bar color="white" height="200" prominent>
				<v-container>
					<v-row no-gutters>
						<v-col sm="1"  xs="12">	
							<v-avatar class="mt-sm-3" height="130" width="130">
								<img aspect-ratio="2" src="https://github.com/jdcanado/jardimdenirvana/raw/master/src/assets/logo_jardim_de_nirvana_nome_circular_sem_fundo.png"/>
							</v-avatar>
						</v-col>
						<v-col sm="4">
							<v-toolbar-title class="mt-sm-10 ml-sm-10" style="font-family: 'Clicker Script', cursive;font-size: 36px">Jardim de Nirvana Atelier</v-toolbar-title>
						</v-col>
					</v-row>
				</v-container>
			</v-app-bar>

			<v-content>
				<router-view></router-view>
			</v-content>

			<v-footer class="elevation-12" app>
				<span style="margin-left: 20px">JDCanado&copy; 2020</span>
				<v-layout row justify-center>
					<v-dialog v-model="dialog" persistent max-width="600px">
						<v-card>
							<v-card-title>
								<span class="headline">Deixe sua mensagem</span>
							</v-card-title>
							<v-card-text>
								<v-container grid-list-md>
									<v-layout wrap>
										<v-flex xs12 sm6>
											<v-text-field label="Nome*" required></v-text-field>
										</v-flex>
										<v-flex xs12 sm6>
											<v-text-field label="Email*" required></v-text-field>
										</v-flex>
										<v-flex xs12 sm12>
											<v-textarea name="msg" label="Mensagem*" hint="Deixe sua mensagem" rows="3" required></v-textarea>
										</v-flex>
									</v-layout>
								</v-container>
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="indigo" flat @click="dialog = false;">Fechar
									<v-spacer/>
										<v-icon left>close</v-icon>
									</v-btn>
									<v-btn color="indigo" flat @click="dialog = false;">Enviar
										<v-icon left>send</v-icon>
									</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</v-layout>
					<v-btn color="green-light" @click="dialog = true;" medium right absolute fab>
						<v-icon>contact_mail</v-icon>
					</v-btn>
				</v-footer>
			</v-app>
	</div>
</template>

<script>
export default {
	name: "App",
	data: () => ({
		drawer: false,
		pagina: "Home",
		dialog: false,
		isAuthenticated: false
	}),
	props: {
		source: String,
		imgLogo: {
			type: String,
			default: require("@/assets/logo_jdcanado_editado_quadrado_cubo.png")
		},
		nomeSistema: {
			type: String,
			default: "Jardim de Nirvana"
		}
	},
	created() {
		this.$vuetify.theme.dark = false;
	},
	methods: {
		login() {
			this.$auth.login();
		},
		logout() {
			this.$auth.logOut();
		},
		handleLoginEvent(data) {
			this.isAuthenticated = data.loggedIn;
			this.profile = data.profile;
		}
	}
};
</script>

<style>
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 0px;
	}

	@import url('https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap');
</style>
