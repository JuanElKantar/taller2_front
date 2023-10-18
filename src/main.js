import './index-component'; 
import './index-2-component'; 
import './login-component'; 

const appContainer = document.getElementById('app');

export function renderPage(pageName) {
  switch (pageName) {
    case 'index':
      appContainer.innerHTML = '<index-component></index-component>';
      break;
    case 'index2':
      appContainer.innerHTML = '<index-2-component></index-2-component>';
      break;
    case 'login':
      appContainer.innerHTML = '<login-component></login-component>';
      break;
    default:

      appContainer.innerHTML = '<login-component></login-component>';
  }
}


renderPage('login');
