import About from '@/views/AboutView.vue'
import { shallowMount } from '@vue/test-utils'

describe('AboutView.vue', () => {
  test('renders inner test', () => {
    const wrapper = shallowMount(About)

    expect(wrapper.text()).toContain('about')
  })
})
