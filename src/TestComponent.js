import React from 'react';
import { gql, useSubscription } from "@apollo/client";

export const TestComponent = () => {
  const ON_COMMENT_POSTED = gql`
    subscription TestData {
      testData(roomId: 100) {
        payload {
          data
        }
      }
    }
  `

  const { data, loading } = useSubscription(ON_COMMENT_POSTED, {variables: { roomId: 100 }});
  console.log(data)

  return (
    <>
      test
    </>
  )
}