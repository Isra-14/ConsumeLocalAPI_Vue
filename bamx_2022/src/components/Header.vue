<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="navbar-brand" href="#">Banco de alimentos de M&eacute;xico</div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">Button!</span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item item">
            <a href="#">Inicio</a>
            <!-- <router-link class="nav-link" to="/">Inicio</router-link> -->
          </li>
          <li class="nav-item item">
            <a href="#">Donadores</a>
            <!-- <router-link class="nav-link" to="/donors">Donadores</router-link> -->
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default{
  name: 'Header'
}
</script>


<style>
.item a{
  margin-right: 20px;
  text-decoration: none;
  color: #a2a2a2;
  cursor: pointer;
}

</style>