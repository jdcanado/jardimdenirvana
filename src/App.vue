<template>
	<div id="app">
		<v-app id="inspire">
			<v-app-bar color="deep-purple" dark>
				<v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

				<v-toolbar-title>JDCanado Financeiro</v-toolbar-title>
			</v-app-bar>

			<v-navigation-drawer v-model="drawer" absolute temporary>
				<v-list nav dense disabled>
					<v-list-item-group v-model="group" v-if="!isAuthenticated">
						<v-list-item>
							<v-avatar size=120>
								<img :src="imgLogo"/>
							</v-avatar>
						</v-list-item>
					</v-list-item-group>
				</v-list>
				<v-list nav dense disabled>
					<v-list-item>
						<v-list-item-content>
							<v-list-item-title>{{ nomeSistema }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
				<v-list nav dense disabled>
					<v-list-item>
						<v-list-item-content>
							<v-list-item-title>
								<v-chip class="mr-2" @click="login();drawer = false;" small>
									<v-icon left small>open</v-icon>
									Entrar
								</v-chip>
							</v-list-item-title>	
						</v-list-item-content>
					</v-list-item>
				</v-list>
				<v-list nav dense disabled>
					<v-list-item-group v-model="group" v-if="isAuthenticated">
						<v-list-item>
							<v-avatar size=100>
								<img :src="profile.picture"/>
							</v-avatar>
							<v-list-item three-line >
								<v-list-item-content>
									<v-list-item-title disabled>{{ profile.name }}</v-list-item-title>
									<v-list-item-subtitle disabled>{{ profile.email }}</v-list-item-subtitle>
									<v-list-item-subtitle>
										<v-chip class="mr-2" @click="logout();drawer = false;" small>
											<v-icon left small>lock_open</v-icon>
											Sair
										</v-chip>
									</v-list-item-subtitle>	
								</v-list-item-content>
							</v-list-item>
						</v-list-item>
					</v-list-item-group>
				</v-list>

				<v-divider></v-divider>

				<v-list nav dense shaped v-if="isAuthenticated">
					<v-list-item-group>
						<v-list-item>

						</v-list-item>

						<v-divider></v-divider>

						<v-list-item to="/configuracoes">
							<v-list-item-icon>
								<v-icon right>settings</v-icon>
							</v-list-item-icon>
							<v-list-item-title>Configurações</v-list-item-title>
						</v-list-item>
					</v-list-item-group>
				</v-list>
			</v-navigation-drawer>
			<v-content>
				<router-view></router-view>
			</v-content>
			<v-footer class="elevation-12" app>
				<span style="margin-left: 20px">JDCanado&copy; 2019</span>
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
										<v-icon left dark>close</v-icon>
									</v-btn>
									<v-btn color="indigo" flat @click="dialog = false;">Enviar
										<v-icon left dark>send</v-icon>
									</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</v-layout>
					<v-btn color="pink" @click="dialog = true;" dark medium right absolute fab>
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
			default: "JDCanado - Financeiro"
		}
	},
	created() {
		this.$vuetify.theme.dark = true;
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
</style>
