import React from 'react';

export default function Services() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', padding: '40px 0' }}>
      <h1
        style={{
          backgroundColor: '#327af6',
          color: 'white',
          textAlign: 'center',
          padding: '40px 0',
          fontSize: '2.5rem',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        Our Services
      </h1>

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '30px',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          fontSize: '1rem',
          lineHeight: '1.6',
        }}
      >
        <p
          style={{
            fontSize: '1.1rem',
            color: '#333',
            marginBottom: '20px',
            textAlign: 'center',
            fontWeight: '300',
          }}
        >
          Welcome to the services section of our school, where we provide top-notch educational
          experiences and support. Explore our offerings below:
        </p>

        <div style={{ marginBottom: '40px' }}>
          <h2
            style={{
              color: '#327af6',
              fontSize: '1.8rem',
              marginBottom: '12px',
              cursor: 'pointer',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.color = '#327af6')}
            onMouseOut={(e) => (e.target.style.color = '#327af6')}
          >
            1. Academic Programs
          </h2>
          <ul
            style={{
              listStyleType: 'none',
              padding: '0',
              marginLeft: '20px',
              fontSize: '1.1rem',
              color: '#555',
            }}
          >
            <li>Supporting students to achieve academic excellence through outstanding educational programs.</li>
            <li>Providing tutoring sessions to improve student performance in core subjects.</li>
          </ul>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2
            style={{
              color: '#327af6',
              fontSize: '1.8rem',
              marginBottom: '12px',
              cursor: 'pointer',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.color = '#327af6')}
            onMouseOut={(e) => (e.target.style.color = '#327af6')}
          >
            2. Co-Curricular Activities
          </h2>
          <ul
            style={{
              listStyleType: 'none',
              padding: '0',
              marginLeft: '20px',
              fontSize: '1.1rem',
              color: '#555',
            }}
          >
            <li>Organizing various sports activities, including football, basketball, and athletics.</li>
            <li>Supporting artistic talents through music, art, and theater clubs.</li>
            <li>Encouraging students to participate in national competitions such as debates and science fairs.</li>
          </ul>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2
            style={{
              color: '#327af6',
              fontSize: '1.8rem',
              marginBottom: '12px',
              cursor: 'pointer',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.color = '#327af6')}
            onMouseOut={(e) => (e.target.style.color = '#327af6')}
          >
            3. Educational Technology
          </h2>
          <ul
            style={{
              listStyleType: 'none',
              padding: '0',
              marginLeft: '20px',
              fontSize: '1.1rem',
              color: '#555',
            }}
          >
            <li>Equipping classrooms with the latest technological teaching tools.</li>
            <li>Providing an online platform for communication between students, parents, and teachers.</li>
            <li>Facilitating access to digital learning resources to assist students in their studies.</li>
          </ul>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2
            style={{
              color: '#327af6',
              fontSize: '1.8rem',
              marginBottom: '12px',
              cursor: 'pointer',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.color = '#327af6')}
            onMouseOut={(e) => (e.target.style.color = '#327af6')}
          >
            4. Support Services
          </h2>
          <ul
            style={{
              listStyleType: 'none',
              padding: '0',
              marginLeft: '20px',
              fontSize: '1.1rem',
              color: '#555',
            }}
          >
            <li>Offering psychological and social counseling to support students academically and personally.</li>
            <li>Providing career guidance programs to help students choose their future paths.</li>
            <li>Ensuring safe and convenient transportation services for students.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
