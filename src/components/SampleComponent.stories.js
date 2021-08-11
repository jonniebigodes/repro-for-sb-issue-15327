import SampleComponent from "./SampleComponent.vue";

export default {
  component: SampleComponent,
  title: "Sample Component with Complex values",
  argTypes: {
    propertyA: {
      options: ["Item One", "Item Two", "Item Three"],
      control: { type: "select" }, // automatically inferred when 'options' is defined
    },
    propertyB: {
      options: ["Another Item One", "Another Item Two", "Another Item Three"],
      control: { type: "select" }, // automatically inferred when 'options' is defined
    },
  },
};

const someFunction = (valuePropertyA, valuePropertyB) => {
  return `I'm a boop: ${valuePropertyA} ${valuePropertyB}`;
};

const Template = (args, { argTypes }) => {
  const { PropertyA, PropertyB } = args;
  const someFunctionResult = someFunction(PropertyA, PropertyB);

  console.log("someProperty Args before transmutation", args.someProperty);

  args.someProperty = someFunctionResult;
  console.log("someProperty Args after transmutation", args.someProperty);

  return {
    components: { SampleComponent },
    props: Object.keys(argTypes),
    template: `<SampleComponent v-bind="$props" />`,
  };
};

export const Default = Template.bind({});
Default.args = {
  PropertyA: "One item",
  PropertyB: "Another item",
  someProperty: "Something else",
};
