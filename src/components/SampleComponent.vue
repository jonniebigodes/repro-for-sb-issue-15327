<template>
  <div>
    <h1>This is a sample component to test out args override with SB 6.3</h1>
    <div>
      <h2>This component has the following props</h2>
      <div>
        <h3>PropertyA has the following value</h3>
        {{ PropertyA }}
        <h3>PropertyB has the following value</h3>
        {{ PropertyB }}
        <h3>SomeProperty has the following value</h3>
        {{ someProperty }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sample-component",
  props: {
    PropertyA: {
      type: String,
      default: "Property A",
    },
    PropertyB: {
      type: String,
      default: "Property B",
    },
    someProperty: {
      type: String,
      default: "Some Property",
    },
  },
  mounted: function () {
    console.log(
      `Sample component value someprop mounted =>${this.someProperty}`
    );
  },
  updated: function () {
    console.log(
      `Sample component value someprop updated =>${this.someProperty}`
    );
  },
};
</script>
