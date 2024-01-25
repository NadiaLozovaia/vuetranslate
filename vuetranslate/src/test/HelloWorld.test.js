import { mount } from '@vue/test-utils'

import HelloWorld from "/src/components/HelloWorld.vue"




test('renders a HelloWorld', () => {
  const wrapper = mount(HelloWorld)

expect(wrapper.findAll('[data-test="HelloWorld"]'))

})