import React from 'react';
import {FormGroup,InputGroup,FormControl,Glyphicon,Button,DropdownButton,MenuItem} from 'react-bootstrap'
class Help extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                <form>
  <FormGroup>
    <InputGroup>
      <InputGroup.Addon>@</InputGroup.Addon>
      <FormControl type="text" />
    </InputGroup>
  </FormGroup>
  <FormGroup>
    <InputGroup>
      <FormControl type="text" />
      <InputGroup.Addon>.00</InputGroup.Addon>
    </InputGroup>
  </FormGroup>
  <FormGroup>
    <InputGroup>
      <InputGroup.Addon>$</InputGroup.Addon>
      <FormControl type="text" />
      <InputGroup.Addon>.00</InputGroup.Addon>
    </InputGroup>
  </FormGroup>

  <FormGroup>
    <InputGroup>
      <FormControl type="text" />
      <InputGroup.Addon>
        <Glyphicon glyph="music" />
      </InputGroup.Addon>
    </InputGroup>
  </FormGroup>

  <FormGroup>
    <InputGroup>
      <InputGroup.Button>
        <Button>Before</Button>
      </InputGroup.Button>
      <FormControl type="text" />
    </InputGroup>
  </FormGroup>
  <FormGroup>
    <InputGroup>
      <FormControl type="text" />
      <DropdownButton
        componentClass={InputGroup.Button}
        id="input-dropdown-addon"
        title="Action"
      >
        <MenuItem key="1">Item</MenuItem>
      </DropdownButton>
    </InputGroup>
  </FormGroup>

  <FormGroup>
    <InputGroup>
      <InputGroup.Addon>
        <input type="radio" aria-label="..." />
      </InputGroup.Addon>
      <FormControl type="text" />
    </InputGroup>
  </FormGroup>
  <FormGroup>
    <InputGroup>
      <InputGroup.Addon>
        <input type="checkbox" aria-label="..." />
      </InputGroup.Addon>
      <FormControl type="text" />
    </InputGroup>
  </FormGroup>
</form>;
                </div>
            </div>
        )
    }
}

export default Help;