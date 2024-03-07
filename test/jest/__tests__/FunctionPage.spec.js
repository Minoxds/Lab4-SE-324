import FunctionPage from 'src/pages/FunctionPage.vue'
import { shallowMount } from '@vue/test-utils'

test('Name Nimmita Somrin 6404101324 available on file ', () => {
    const wrapper = shallowMount(FunctionPage)
    expect(wrapper.find('form > input').exists("Nimmita","Somrin","6404101324")).toBe(true)
  })

describe('IndexPage', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(FunctionPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
  })
})

it('check text content to be as defined in variable', () => {
  const wrapper = shallowMount(FunctionPage, {
    data () {
      return {
        title: 'I love Vue.'
      }
    }
  })
  let header = wrapper.find('.htmlClass h1')
  expect(header.text()).toBe('I love Vue.')
})

test('should show the form element on the user output', () => {
  const wrapper = shallowMount(FunctionPage)
  expect(wrapper.find('form').exists()).toBe(true)
})

test('should contain input fields in template', () => {
  const wrapper = shallowMount(FunctionPage)
  expect(wrapper.find('form > input').exists()).toBe(true)
})

test('should have button', () => {
  const wrapper = shallowMount(FunctionPage)
  expect(wrapper.find('button').exists()).toBe(true)
})

