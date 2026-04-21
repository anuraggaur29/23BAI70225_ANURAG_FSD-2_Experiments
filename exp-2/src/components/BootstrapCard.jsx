import { Card, Button } from 'react-bootstrap'

export default function BootstrapCard() {
  return (
    <Card className="mt-4 shadow-lg" style={{ borderRadius: '15px' }}>
      <Card.Body style={{ padding: '3rem', textAlign: 'center' }}>
        <Card.Title style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#c00000' }}>
          Bootstrap Card
        </Card.Title>
        <Card.Text style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#666' }}>
          Same UI using Bootstrap Components
        </Card.Text>
        <Button variant="danger" size="lg" style={{ fontSize: '1.3rem', padding: '12px 50px' }}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  )
}
