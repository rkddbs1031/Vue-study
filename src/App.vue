<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/todo">Todo</router-link>
    <router-link to="/todo2">Todo2</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: fixed;
  height: 100vh;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #222;
  z-index: 100;
}

#nav a {
  font-weight: bold;
  color: #fff;
  margin: 20px 0;
  text-decoration: none;
  display: inline-block;
  padding: 10px;
  border-radius: 5px;
  background: #404040;
  box-shadow: 1px 7px #000;
  transform: translateY(0);
  transition: 0.2s;
}

#nav a.router-link-exact-active {
  background: #42b983;
  color: #fff;
  box-shadow: 1px 7px #2d875e;
}
#nav a.router-link-exact-active:hover {
  box-shadow: 1px 3px #2d875e;
  transform: translateY(2px);
}
#nav a:hover {
  box-shadow: 1px 3px #000;
  transform: translateY(2px);
}
</style>
