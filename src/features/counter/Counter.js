import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  //incrementByAmount,
  incrementAsync,
  //incrementIfOdd,
  selectCount,
} from './counterSlice';

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        
      </div>
    </div>
  );
}