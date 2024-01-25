import { mount } from '@vue/test-utils'


import ForTest from "/src/components/ForTest.vue"



test('renders a ForTest', () => {
  const wrapper = mount(ForTest)

expect(wrapper.findAll('[data-test="ForTest"]'))

})