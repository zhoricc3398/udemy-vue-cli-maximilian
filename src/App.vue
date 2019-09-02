<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr />
        <p>{{ selectedComponent }}</p>
        <component :is="selectedComponent"> </component>
        <!--        <app-quote>-->
        <!--          <h2 slot="title">{{ quoteTitle }}</h2>-->
        <!--          <p>A wonderful Quote</p>-->
        <!--        </app-quote>-->
      </div>
    </div>
  </div>
</template>

<script>
import Author from "./Components/Author";
import New from "./Components/New";
import Quote from "./Components/Quote";

export default {
  data() {
    return {
      quoteTitle: "The Quote",
      selectedComponent: "appQuote"
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
};
</script>

<style></style>
