import { renderComponent , expect } from '../test_helper';
import SearchBar from '../../src/containers/search_bar';

describe('SearchBar', () => {
    let component; 

    beforeEach(() => {
        component = renderComponent(SearchBar);
    });

    it('has an icon', () => {
        expect(component.find('i')).to.exist;
    });

    it('has an input', () => {
        expect(component.find('input')).to.exist;
    });
});