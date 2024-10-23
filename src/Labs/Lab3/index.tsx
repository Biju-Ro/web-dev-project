import "./index.css";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import ForLoops from "./ForLoops";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import SimpleArrays from "./SimpleArrays";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import Classes from "./Classes";
import House from "./House";
import Spreading from "./Spreading";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import Styles from "./Styles";

export default function Lab3() {
  console.log("Hello World!!");
  return (
    <div id="wd-lab3">
      <h3>Lab 3</h3>
      <h3>JavaScript</h3>
      <VariablesAndConstants />
      <br />
      <VariableTypes />
      <br />
      <BooleanVariables />
      <br />
      <IfElse />
      <br />
      <TernaryOperator />
      <br />
      <ConditionalOutputIfElse />
      <br />
      <ConditionalOutputInline />
      <br />
      <LegacyFunctions />
      <br />
      <ArrowFunctions />
      <br />
      <ImpliedReturn />
      <br />
      <TemplateLiterals />
      <br />
      <SimpleArrays />
      <br />
      <ArrayIndexAndLength />
      <br />
      <AddingAndRemovingToFromArrays />
      <br />
      <ForLoops />
      <br />
      <MapFunction />
      <br />
      <FindFunction />
      <br />
      <FindIndex />
      <br />
      <FilterFunction />
      <br />
      <JsonStringify />
      <br />
      <House />
      <br />
      <TodoItem />
      <br />
      <TodoList />
      <br />
      <Spreading />
      <br />
      <Destructing />
      <br />
      <FunctionDestructing />
      <br />
      <DestructingImports />
      <br />
      <Classes />
      <br />
      <Styles />
      <br />
      <Add a={3} b={4} />
      <br />
      <h4>Square of 4</h4>
      <br />
      <Square>4</Square>
      <br />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
        eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
        excepturi consectetur. Modi omnis minus sequi maiores, provident
        voluptates.
      </Highlight>
      <hr />
    </div>
  );
}
