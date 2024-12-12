import React from 'react';

interface UpdateScorePayload {
    userId: string;
    credibilityScore: number;
  }

const Competency = (props) => {
    
      
      const updateScore = async (userId: string, credibilityScore: number): Promise<any> => {
        const apiUrl = 'http://localhost:5000/update-user';
        const payload: UpdateScorePayload = {
          userId,
          credibilityScore,
        };
      
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
      
          if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
          }
      
          const result = await response.json();
          console.log('Update successful:', result);
          return result;
        } catch (error) {
          console.error('Error updating credibility score:', error);
          throw error;
        }
      };
      updateScore(props.user,props.update)
      
  return (
    <></>
  )
}

export default Competency