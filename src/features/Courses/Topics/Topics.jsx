import React from 'react';
import { Stack } from '@mui/material';
import SelectTopic from './SelectTopic';

export default function Topics({ topics }) {
  return (
    <Stack direction="column" gap="10px" sx={{ marginTop: '25px' }}>
      {topics.map((topic, index) => {
        return (
          <SelectTopic key={index} topicName={topic.topic_name} materials={topic.materials} />
        );
      })}
    </Stack>
  );
}
