import React from "react";
import { Components } from "../../../views/Components/Components.js";
import { beforeEach, it } from "jest-circus";
import { shallow } from "enzyme";
import TestRenderer from "react-test-renderer";

jest.mock("../../../views/Components/Components.js", () => ({
    ...jest.requireActual('@material-ui/styles'),
    makeStyles: cb => () => cb({
       spacing: () => 0
    }),
}))

let wrapper = null;

beforeEach(() => {
    wrapper = shallow(<Components />);
});

test("Body component", () => {
    it("should render", () => {
        expect(wrapper.find('.classes.main')).toHaveLength(1);
    });
});

test("sub components", () => {
    it("render", () => {
        const testRenderer = TestRenderer.create(<Components />);
        expect(testRenderer).toMatchSnapshot();
    });
});