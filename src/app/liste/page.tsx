"use client"
import React, { useState, useEffect } from 'react';

interface ListItem {
  id: number;
  name: string;
}

export default function ResponsePage() {
  const [list, setList] = useState<ListItem[]>([]);

  const fetchList = async () => {
    try {
      const response = await fetch('/api');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Data received:', data); // Check the format of the received data
      setList(data as ListItem[]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      {list.length > 0 ? (
        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
