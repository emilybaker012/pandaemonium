import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { FaGlassWater } from 'react-icons/fa6';
import Confetti from './Confetti';
import styles from './WaterWidget.module.scss';

const WaterWidget = () => {
  const [waterAmount, setWaterAmount] = useState(localStorage.getItem('water') || 0);
  const handleAddWater = () => {
    setWaterAmount(parseInt(waterAmount, 10) + 8);
  };

  const handleClearAmount = () => {
    setWaterAmount(0);
  };

  useEffect(() => {
    console.log(`setting water to ${waterAmount}`);
    localStorage.setItem('water', waterAmount);
  }, [waterAmount]);

  useEffect(() => {

  }, []);
  return (
    <Card>
      <Card.Body className={styles.waterWidgetBody}>
        {waterAmount === 64 && <Confetti />}
        <button
          type="button"
          onClick={handleClearAmount}
          className={styles.clearButton}
        >clear
        </button>
        <Stack direction="horizontal" gap={1}>
          <FaGlassWater
            size={24}
            className={styles.waterIcon}
            onClick={handleAddWater}
          />
          {waterAmount}/64 oz
        </Stack>

      </Card.Body>
    </Card>

  );
};

export default WaterWidget;
