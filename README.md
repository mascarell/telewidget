## TeleWidget

**TeleWidget** is a simple javascript widget started by [@mascarelldev](https://twitter.com/mascarelldev) that allows your customers to talk to you and your customer support team directly on Telegram. It's based on [this post](https://blog.jenyay.com/building-javascript-widget/) by Jenyay so if you're interested in building javascript widgets, start there 👍.


### Features

* Free and open source!
* No watermark
* Use multiple Telegram users to talk with your customers
* Change the position of the widget
* Customize the message and when it appears
* Light and dark theme

#### WIP

* WordPress plugin
* SASS instead of the ugly and big CSS file that we currently have
* Add picture on top of README.md
* Let people decide how long the cookie should be as a parameter, if not provided, default to 1 day
* Change the default icon to whatever picture you want
* Webpack.config.js is the default of the Jenyay tutorial, could be nice to actually change it and optimize for our use

### Usage

Just add a **script** before your closing **head** tag (You can see an example [here](https://codepen.io/mascarell/pen/yLOXWOW)).

```javascript
(function (w,d,s,o,f,js,fjs) {
    w['ww']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) }
    js = d.createElement(s), fjs = d.getElementsByTagName(s)[0]
    js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs)
}(window, document, 'script', 'telewidget', 'https://cdn.jsdelivr.net/gh/mascarell/telewidget@latest/widget.js'))

telewidget('config', {
    message: 'Widget example! 🔥',
    // You can put only one user in the array if you don't need multiple users to manage customer support
    users: ['user1', 'user2'],
    showMessageAlways: true,
    useCookies: true,
    floatLeft: false,
    useAnimations: true,
    useDarkTheme: false,
})
```

### Configuration options

|                       | **description**                                                                                                                                          | **required** | **default** |
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|
| **message**           | Widget welcome message. If not provided, no message will be shown.                                                                                                                                          | No           |             |
| **users**             | **Array** with the users you want people to contact. If no users are provided, the widget will not redirect on click. | No           |             |
| **floatLeft**         | Align the widget to the left. By default it's aligned to the right.                                                                                                                           | No           | false       |
| **showMessageAlways** | The message is hidden by default on mobile viewports, it is, however, responsive, so just change to true and it will show on smartphones too.            | No           | false       |
| **useCookies**        | Show the message only once every day, change to false to not use cookies and show the message everytime the user visits your site.                         | No           | false        |
| **useAnimations**        | Use animations on the button and message                        | No           | false        |
| **useDarkTheme**        | Use dark theme                       | No           | false        |

### Run the project locally

```bash
git clone https://github.com/mascarell/telewidget.git
cd telewidget

# install dependencies
cd dev
npm install

# to test locally
npm run start

# build for release
npm run build
```