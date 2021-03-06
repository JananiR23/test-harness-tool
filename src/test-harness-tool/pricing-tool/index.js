import React, {useState} from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button, Alert, Breadcrumb, OverlayTrigger, Tooltip } from 'react-bootstrap'
import axios from 'axios'
import { useHistory, useLocation } from 'react-router-dom'
import ProfileList from '../common/profile-list'
import styles from './pricing-tool.scss'
import common from '../common/common.scss'

function Dashboard() {
  const history = useHistory()
  const location = useLocation()
  const { state: backFormData } = location
  const initial = {borrowingAmount: '', riskBand:'', term: '', locationIdentity: '', bankDivision : '', productFamily: '', productName: ''}
  const [state, setState] = useState(backFormData ? backFormData : initial)
  const [error, setError] = useState('')
    
  function handleSubmit(e) {
	  e.preventDefault();
	  const error = validation(state)
	  if (error === '') {
		setError('')
		buildJSON(state)
	  } else {
		setError(error)	
	  }
  }
  
  function validation(forms) {
	let errors = ''
	if (forms.locationIdentity === '') {
		errors = 'Please enter application identity';
	} 
	if (errors === '' && forms.bankDivision === '') {
		errors = 'Please enter bank division';
	}
	if (errors === '' && forms.productFamily === '') {
		errors = 'Please enter product family';
	}
	if (errors === '' && forms.productName === '') {
		errors = 'Please enter product name';
	}
	if (errors === '' && forms.borrowingAmount === '') {
		errors = 'Please enter borrowing amount';
	} 
	if (errors === '' && forms.riskBand === '') {
		errors = 'Please enter risk band';
	}
	if (errors === '' && forms.term === '') {
		errors = 'Please enter term (months)';
	}
	return errors
  }
  
  function buildJSON(forms) {
	  const borrowingAmount = forms.borrowingAmount.split(',').map(Number);
	  const riskBand = forms.riskBand.split(',').map(Number);
	  const term = forms.term.split(',').map(Number);
	  let postData = [];
	  const lists = {}
	  lists['barrowAmount'] = borrowingAmount;
	  lists['riskFactor'] = riskBand;
	  lists['termFactor'] = term;
	  lists['applicationIdentity'] = forms.locationIdentity;
	  lists['bankDivision'] = forms.bankDivision;
	  lists['productFamily'] = forms.productFamily;
	  lists['productName'] = forms.productName;
	  postData.push(lists)
	  axios.post('http://localhost:8081/scenarios', postData)
	  .then((response) => {
		  const { data } = response
		  history.push({
			pathname: '/rules-processing/test-data',
			state: {postData: data, formData: forms}
		})
	 })
	 .catch(() => {
		 const data = [
        {
            "id": "012005210000001",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 18,
            "riskFactor": 1,
            "allInRate": 6.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 6.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 10000
        },
        {
            "id": "012005210000002",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 18,
            "riskFactor": 1,
            "allInRate": 7.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 7.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 20000
        },
        {
            "id": "012005210000003",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 18,
            "riskFactor": 1,
            "allInRate": 8.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 8.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 30000
        },
        {
            "id": "012005210000004",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 18,
            "riskFactor": 2,
            "allInRate": 6.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 6.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 10000
        },
        {
            "id": "012005210000005",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 18,
            "riskFactor": 2,
            "allInRate": 7.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 7.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 20000
        },
        {
            "id": "012005210000006",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 18,
            "riskFactor": 2,
            "allInRate": 8.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 8.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 30000
        },
        {
            "id": "012005210000007",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 18,
            "riskFactor": 3,
            "allInRate": 6.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 6.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "N",
            "barrowAmount": 10000
        },
        {
            "id": "012005210000008",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 18,
            "riskFactor": 3,
            "allInRate": 7.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 7.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 20000
        },
        {
            "id": "012005210000009",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 18,
            "riskFactor": 3,
            "allInRate": 8.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 8.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 30000
        },
        {
            "id": "012005210000010",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 6,
            "riskFactor": 1,
            "allInRate": 6.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 6.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 10000
        },
        {
            "id": "012005210000011",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 6,
            "riskFactor": 1,
            "allInRate": 7.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 7.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 20000
        },
        {
            "id": "012005210000012",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 6,
            "riskFactor": 1,
            "allInRate": 8.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 8.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 30000
        },
        {
            "id": "012005210000013",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 6,
            "riskFactor": 2,
            "allInRate": 6.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 6.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 10000
        },
        {
            "id": "012005210000014",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 6,
            "riskFactor": 2,
            "allInRate": 7.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 7.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "N",
            "barrowAmount": 20000
        },
        {
            "id": "012005210000015",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 6,
            "riskFactor": 2,
            "allInRate": 8.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 8.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 30000
        },
        {
            "id": "012005210000016",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 6,
            "riskFactor": 3,
            "allInRate": 6.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 6.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 10000
        },
        {
            "id": "012005210000017",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 6,
            "riskFactor": 3,
            "allInRate": 7.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 7.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 20000
        },
        {
            "id": "012005210000018",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 6,
            "riskFactor": 3,
            "allInRate": 8.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 8.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 30000
        },
        {
            "id": "012005210000019",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 12,
            "riskFactor": 1,
            "allInRate": 6.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 6.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 10000
        },
        {
            "id": "012005210000020",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 12,
            "riskFactor": 1,
            "allInRate": 7.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 7.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 20000
        },
        {
            "id": "012005210000021",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 12,
            "riskFactor": 1,
            "allInRate": 8.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 8.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "N",
            "barrowAmount": 30000
        },
        {
            "id": "012005210000022",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 12,
            "riskFactor": 2,
            "allInRate": 6.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 6.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 10000
        },
        {
            "id": "012005210000023",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 12,
            "riskFactor": 2,
            "allInRate": 7.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 7.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 20000
        },
        {
            "id": "012005210000024",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 12,
            "riskFactor": 2,
            "allInRate": 8.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 8.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 30000
        },
        {
            "id": "012005210000025",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 12,
            "riskFactor": 3,
            "allInRate": 6.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 6.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 10000
        },
        {
            "id": "012005210000026",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 12,
            "riskFactor": 3,
            "allInRate": 7.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 7.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 20000
        },
        {
            "id": "012005210000027",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 12,
            "riskFactor": 3,
            "allInRate": 8.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 8.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 30000
        }
		]
		  history.push({
			pathname: '/rules-processing/test-data',
			state: {postData: data, formData: forms}
		})
	 })
  }
  
  function handleReset() {
	  setState({...state, ...initial})
  }
  
  const onTextUpdated = (label) => (e) => {
	  const data = e.target.value;
	  const checkCommas = data.split(',')
	  const totCommas = checkCommas.length
	  const eachData = checkCommas[totCommas-1]
	  const lastBeforeData = checkCommas[totCommas-2]
	  const regex = /^[\d\,]+$/g
	  let valid = true
	  if (label === "borrowingAmount" && lastBeforeData && (Number(lastBeforeData) < 1000 || Number(lastBeforeData) > 5000)) {
		  valid = false
	  }
	  if (data === '' || (data && regex.test(data) && totCommas <= 4 && eachData !== "0" && checkCommas[0] !== "" && valid)) {
		setState({...state, [label]: data})
	  }
  }
  
  const removeUnwantedComma = (label) => (e) => {
	  const data = e.target.value;
	  const checkCommas = data.split(',')
	  const totCommas = checkCommas.length
	  const eachData = checkCommas[totCommas-2]
	  const regex = /,\s*$/
	  if (regex.test(data)) {
		setState({...state, [label]: data.replace(regex, "")})
	  }
  }
  
  const onSelectedSingleOptionChange = (label) => (e) => {
	setState({...state, [label]: e.target.value})
  }
  
  return (
    <>
      <Row className={styles.section}>
        <Col md="12">
		  <Row>
		   <Col md="9">
		    <Breadcrumb>
		     <Breadcrumb.Item href="#/">Home</Breadcrumb.Item>
		     <Breadcrumb.Item active>Pricing Tool</Breadcrumb.Item>
		    </Breadcrumb>
		   </Col>
		   <Col md="3">
		    <ProfileList />
		   </Col>
		  </Row>
		  {error &&
		    <Alert key="1" className={styles.alert} variant="danger">
			  {error}
		    </Alert>
		  }
          <Card>
            <Card.Header>Pricing Business Parameters</Card.Header>
            <Card.Body>
            <Form>
			  <Row>
			    <Col md="6">
			     <Form.Group as={Row} controlId="locationIdentity">
                   <Form.Label column sm="4">Application Identity</Form.Label>
                   <Col sm="6">
				     <Form.Control as="select" value={state.locationIdentity} onChange={onSelectedSingleOptionChange('locationIdentity')}>
                      <option value="">Please Select</option>
					  <option value="Ulster">Ulster</option>
                     </Form.Control>
				   </Col>
                 </Form.Group>
			    </Col>
				<Col md="6">
				  <Form.Group as={Row} controlId="bankDivision">
                  <Form.Label column sm="3">Bank Division</Form.Label>
                  <Col sm="6">
				    <Form.Control as="select" value={state.bankDivision} onChange={onSelectedSingleOptionChange('bankDivision')}>
                      <option value="">Please Select</option>
					  <option value="Business">Business</option>
                    </Form.Control>
				   </Col>
                  </Form.Group>
				</Col>
			  </Row>
			  <Row>
			    <Col md="6">
				  <Form.Group as={Row} controlId="productFamily">
					<Form.Label column sm="4">Product Family</Form.Label>
					<Col sm="6">
					  <Form.Control as="select" value={state.productFamily} onChange={onSelectedSingleOptionChange('productFamily')}>
						<option value="">Please Select</option>
						<option value="Loans">Loans</option>
					  </Form.Control>
					</Col>
				  </Form.Group>
				</Col>
				<Col md="6">
				  <Form.Group as={Row} controlId="productName">
					<Form.Label column sm="3">Product Name</Form.Label>
					<Col sm="6">
					  <Form.Control as="select" value={state.productName} onChange={onSelectedSingleOptionChange('productName')}>
						<option value="">Please Select</option>
						<option value="Small Business Loan (Fixed)">Small Business Loan (Fixed)</option>
					  </Form.Control>
					</Col>
				  </Form.Group>
				</Col>
			  </Row>
			  <Form.Group as={Row} controlId="borrowingAmount">
				<Form.Label column sm="2">Borrowing Amount</Form.Label>
				<Col sm="4" className={styles.textform}>
				  <Form.Control type="text" value={state.borrowingAmount} autoComplete="off" onChange={onTextUpdated('borrowingAmount')} onBlur={removeUnwantedComma('borrowingAmount')} />
				  <OverlayTrigger
					  placement="right"	
					  overlay={
						<Tooltip>Min: 1000, Max: 5000 Delimiter [0-9,]</Tooltip>
					  }
					>
					<div className={styles.tooltip}><div className={styles.qicon} /></div>
                  </OverlayTrigger>
				</Col>
		      </Form.Group>
			  <Form.Group as={Row} controlId="term">
				<Form.Label column sm="2">Term (Months)</Form.Label>
				<Col sm="4" className={styles.textform}>
				  <Form.Control type="text" value={state.term} autoComplete="off" onChange={onTextUpdated('term')} onBlur={removeUnwantedComma('term')} />
				  <OverlayTrigger
					  placement="right"	
					  overlay={
						<Tooltip>Delimiter [0-9,]</Tooltip>
					  }
					>
					<div className={styles.tooltip}><div className={styles.qicon} /></div>
                  </OverlayTrigger>
				</Col>
			  </Form.Group>
			  <Form.Group as={Row} controlId="riskBand">
				<Form.Label column sm="2">Risk Band</Form.Label>
				<Col sm="4" className={styles.textform}>
				  <Form.Control type="text" value={state.riskBand} autoComplete="off" onChange={onTextUpdated('riskBand')} onBlur={removeUnwantedComma('riskBand')} />
				  <OverlayTrigger
					  placement="right"	
					  overlay={
						<Tooltip>Delimiter [0-9,]</Tooltip>
					  }
					>
					<div className={styles.tooltip}><div className={styles.qicon} /></div>
                  </OverlayTrigger>
				</Col>
			  </Form.Group>
			  <Button variant="danger" onClick={handleReset}>Reset</Button>{' '}
              <Button variant="primary" onClick={handleSubmit}>Next</Button>
            </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
