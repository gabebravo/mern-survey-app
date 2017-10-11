import React from 'react'
import { Link } from 'react-router-dom'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'

const SurveyModal = ({ title, isOpen, body, modalBtn, 
  handleToggle, shouldLinkToDashboard }) => {
  const actions = shouldLinkToDashboard ?
  [
    <Link to={'/dashboard'}>
      <FlatButton
        label={modalBtn || "OK"}
        primary={true}
      />
    </Link>
  ] :
  [
    <FlatButton
      label={modalBtn || "OK"}
      primary={true}
      onClick={ () => handleToggle(!isOpen) }
    />
  ] 
  return(
    <Dialog
      title={title}
      actions={actions}
      modal={true}
      open={isOpen}>{body}
    </Dialog>
  )
}

export default SurveyModal