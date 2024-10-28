import * as signalR from '@microsoft/signalr';
import store from '../store/store';

const connection = new signalR.HubConnectionBuilder()
  .withUrl("http://localhost:5122/cryptoHub", {
    accessTokenFactory: () => {
      // Get the token from the store
      return store.getters.token;
    }
  }) 
  .withAutomaticReconnect()
  .configureLogging(signalR.LogLevel.Information)
  .build();

export default connection;