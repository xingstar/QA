import React from 'react';
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'

import {App} from './index';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test('react dom is right', async () => {
    const { getByTestId } = render(<App />);
    const [h2, nav] = [getByTestId('js-h2'),getByTestId('js-ul')];
    expect(h2.textContent).toContain('react 测试');
    expect(nav.children.length).toBe(2);
})
// describe("基础React单元测试", function () {
//     it("index组件测试", function () {
//         const { getByTestId } = render(<App />);
//         const [ul, nav] = [getByTestId("js-ul"), getByTestId("js-h2")];
//         expect(ul.children.length).toBe(2);
//         expect(nav.textContent).toContain("react 测试");
//     })
// });
