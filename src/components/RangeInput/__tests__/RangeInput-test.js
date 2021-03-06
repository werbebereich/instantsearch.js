import React from 'react';
import { shallow } from 'enzyme';
import RangeInput from '../RangeInput';

describe('RangeInput', () => {
  const defaultProps = {
    min: 0,
    max: 500,
    step: 1,
    values: {},
    cssClasses: {
      root: 'root',
      noRefinement: 'noRefinement',
      form: 'form',
      label: 'label',
      input: 'input',
      inputMin: 'inputMin',
      inputMax: 'inputMax',
      separator: 'separator',
      submit: 'submit',
    },
    templatesProps: {
      templates: {
        separatorText: 'to',
        submitText: 'Go',
      },
    },
    refine: () => {},
  };

  const shallowRender = props =>
    shallow(<RangeInput {...defaultProps} {...props} />);

  it('expect to render', () => {
    const props = {};
    const component = shallowRender(props);

    expect(component).toMatchSnapshot();
  });

  it('expect to render with values', () => {
    const props = {
      values: {
        min: 20,
        max: 480,
      },
    };

    const component = shallowRender(props);

    expect(component).toMatchSnapshot();
    expect(component.state()).toEqual({
      min: 20,
      max: 480,
    });
  });

  it('expect to render with disabled state', () => {
    const props = {
      min: 480,
      max: 20,
    };

    const component = shallowRender(props);

    expect(component).toMatchSnapshot();
  });

  describe('willReceiveProps', () => {
    it('expect to update the empty state from given props', () => {
      const props = {};
      const nextProps = {
        values: {
          min: 20,
          max: 480,
        },
      };

      const component = shallowRender(props);

      expect(component).toMatchSnapshot();

      component.setProps(nextProps);

      expect(component).toMatchSnapshot();
      expect(component.state()).toEqual({
        min: 20,
        max: 480,
      });
    });

    it('expect to update the state from given props', () => {
      const props = {
        values: {
          min: 40,
          max: 460,
        },
      };

      const nextProps = {
        values: {
          min: 20,
          max: 480,
        },
      };

      const component = shallowRender(props);

      expect(component).toMatchSnapshot();

      component.setProps(nextProps);

      expect(component).toMatchSnapshot();
      expect(component.state()).toEqual({
        min: 20,
        max: 480,
      });
    });
  });

  describe('onChange', () => {
    it('expect to update the state when min change', () => {
      const props = {};
      const component = shallowRender(props);

      component
        .find('input[type="number"]')
        .first()
        .simulate('change', {
          currentTarget: {
            value: 20,
          },
        });

      expect(component).toMatchSnapshot();
      expect(component.state()).toEqual({
        min: 20,
      });
    });

    it('expect to update the state when max change', () => {
      const props = {};
      const component = shallowRender(props);

      component
        .find('input[type="number"]')
        .last()
        .simulate('change', {
          currentTarget: {
            value: 480,
          },
        });

      expect(component).toMatchSnapshot();
      expect(component.state()).toEqual({
        max: 480,
      });
    });
  });

  describe('onSubmit', () => {
    it('expect to call refine with min, max as integer', () => {
      const props = {
        refine: jest.fn(),
      };

      const event = {
        preventDefault: jest.fn(),
      };

      const component = shallowRender(props);

      component
        .find('input[type="number"]')
        .first()
        .simulate('change', {
          currentTarget: {
            value: 20,
          },
        });

      component
        .find('input[type="number"]')
        .last()
        .simulate('change', {
          currentTarget: {
            value: 480,
          },
        });

      component.find('form').simulate('submit', event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(props.refine).toHaveBeenCalledWith([20, 480]);
    });

    it('expect to call refine with min, max as float', () => {
      const props = {
        refine: jest.fn(),
      };

      const event = {
        preventDefault: jest.fn(),
      };

      const component = shallowRender(props);

      component
        .find('input[type="number"]')
        .first()
        .simulate('change', {
          currentTarget: {
            value: 20.05,
          },
        });

      component
        .find('input[type="number"]')
        .last()
        .simulate('change', {
          currentTarget: {
            value: 480.05,
          },
        });

      component.find('form').simulate('submit', event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(props.refine).toHaveBeenCalledWith([20.05, 480.05]);
    });

    it('expect to call refine with min only', () => {
      const props = {
        refine: jest.fn(),
      };

      const event = {
        preventDefault: jest.fn(),
      };

      const component = shallowRender(props);

      component
        .find('input[type="number"]')
        .first()
        .simulate('change', {
          currentTarget: {
            value: 20,
          },
        });

      component.find('form').simulate('submit', event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(props.refine).toHaveBeenCalledWith([20, undefined]);
    });

    it('expect to call refine with max only', () => {
      const props = {
        refine: jest.fn(),
      };

      const event = {
        preventDefault: jest.fn(),
      };

      const component = shallowRender(props);

      component
        .find('input[type="number"]')
        .last()
        .simulate('change', {
          currentTarget: {
            value: 480,
          },
        });

      component.find('form').simulate('submit', event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(props.refine).toHaveBeenCalledWith([undefined, 480]);
    });

    it('expect to call refine without values', () => {
      const props = {
        refine: jest.fn(),
      };

      const event = {
        preventDefault: jest.fn(),
      };

      const component = shallowRender(props);

      component.find('form').simulate('submit', event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(props.refine).toHaveBeenCalledWith([undefined, undefined]);
    });
  });
});
