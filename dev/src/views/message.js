import html from './message.html';
import './message.css';

let body;
let tmp = document.createElement('div');
tmp.innerHTML = html;
let container = tmp.querySelector('.tlgc');

/* Initial configuration for the widget */
export function config(config) {    
	// Add animations if the option is enabled
	if(config.useAnimations) {
		container.querySelector('.tlgm').classList.add('slide');
		container.querySelector('.telewidget-button').classList.add('zoomIn');
	}

	// Add dark theme classes if the option is enabled
	if (config.useDarkTheme) {
		container.classList.add('dark');
	}
	
  // Welcome message
  if(config.message) {
    // If we use cookies, check to see if the cookie exists already
    if(config.useCookies && document.cookie.match(/^(.*;)?\s*showmessage\s*=\s*[^;]+(.*)?$/) == null ) {
      container.querySelector('.tlgm').innerHTML = `${config.message} <span></span>`;
      // Event listener to close the message on the widget
      container.querySelector('.tlgm span').addEventListener('click', closeMessage);
      // Create the cookie
      createCookie('showmessage', 'no', 3);
      // Show the message if we're not using cookies
    } else if (!config.useCookies) {
      container.querySelector('.tlgm').innerHTML = `${config.message} <span></span>`;
      // Event listener to close the message on the widget
      container.querySelector('.tlgm span').addEventListener('click', closeMessage);
      // Remove the div that contains the welcome message if we're using the cookie and it already exists
    } else {
      container.querySelector('.tlgm').remove();
    }
    // If there's no welcome message, remove that div
  } else {
    container.querySelector('.tlgm').remove();
  }
		
	// Add telegram link
    if(config.users) {
		try {
			let randomUsers = config.users[Math.floor(Math.random() * config.users.length)];
			
			container.querySelector('.telewidget-button').href = `https://t.me/${randomUsers}`;
		} catch (error) {
			console.error('telewidget -> cannot select users');
		}
	}

	// Show the widget on the left side of the page
    if(config.floatLeft) {
      container.classList.add('left');
	}

	// Show the widget message on mobile devices
  if(config.showMessageAlways) {
    container.classList.add('show-message-always');
	}

	// Add the widget to the body of your page
  body = document.getElementsByTagName('body')[0];
  body.appendChild(container);
}

/* Close widget welcome message */
export function closeMessage() {
  container.querySelector('.tlgm').style.display = 'none'
}

/* Function to create a cookie to show the message only once every day */
/* Taken from here https://stackoverflow.com/questions/6561687/how-can-i-set-a-cookie-to-expire-after-x-days-with-this-code-i-have */
function createCookie(name, value, days) {
  console.log('creating cookie');

  let date;
  let expires;

  if (days) {
    date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    expires = "; expires="+date.toGMTString();
  } else {
    expires = "";
  }

  document.cookie = name+"="+value+expires+"; path=/";
}