import Test from "./test.js"

export default {
    title: 'Test',
    component: Test,
    argTypes: {
        backgroundColor: {control: 'color' },
        color: {control: 'color' },
        padding: {control: "number", defaultValue: 16}
    },
};

export const Stories = (args) =>(<Test {...args} />)

export const NoArgsStories = (args) =>(<Test {...args} />)

export const PARKITO = ()=> <h1>PARKITO</h1>