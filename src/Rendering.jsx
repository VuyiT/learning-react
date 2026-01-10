export default function RenderListElements() {
    const animals = ["Lion", "Snake", "Bull", "Penguine", "Zebra", "Giraffe"];

    return (
        <div>
            <h1>Animals</h1>
            <ul>
                {animals.map(animal => {
                    return <li key={animal}>{animal}</li>
                    })}
            </ul>
        </div>
    );
}

function ListItem(props) {
    return (
        <li>{props.animal}</li>
    );
}

function List(props) {
    return (
        <ul>
            {props.animalList.map(animal => {
            return animal.startsWith("L") && <li key={animal}>{animal}</li>;
        })}
        </ul>
    );
}

function RenderComponentList() {
    const animals = ["Lion", "Snake", "Bull", "Penguine", "Zebra", "Giraffe"];

    return (
        <div>
            <h1>Animals: </h1>
            <List animalList={animals}/>
        </div>
    );
}

function Item({ name, isPacked }) {
    let itemContent = name;

    if (isPacked) {
       itemContent = (
        <del>
            {name + " *YES*"}
        </del>
       )
    }

    return (
        <li className="item">
            {itemContent}
        </li>
    );
}

function PackingList() {
    return (
        <section>
            <h1>Sally's Packing List</h1>
            <ul>
                <Item 
                  name="Space suit"
                  isPacked={true}
                /> 
                <Item 
                  name="Helmet with leaf"
                  isPacked={true}
                /> 
                <Item 
                  name="Photo of Tam"
                  isPacked={false}
                />  
            </ul>
        </section>
    );
}

const scientists = [{
    id: 0,
    name: "Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculation",
}, {
    id: 1,
    name: "Mario Jose",
    profession: "chemist",
    accomplishment: "discovery of arctic ozone layer",
}, {
    id: 2,
    name: "Mohammad Salam",
    profession: "physicist",
    accomplishment: "electromagnatism theory",
}, {
    id: 3,
    name: "Percy Julian",
    profession: "chemist",
    accomplishment: "pioneering cortisone drugs, steroids and birth control",
}, {
    id: 4,
    name: "Subra Chand",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
},]

let chemists = [];
let everyoneElse = [];

scientists.forEach(scientist => {
    if (scientist.profession === "chemist") {
        chemists.push(scientist);
    } else {
        everyoneElse.push(scientist);
    }
});

function ListSection({ title, people }) {
    return (
        <>
            <h2>{title}</h2>
            <ul>
                {people.map(person =>
                <li key={person.id}>
                    <h3>{person.name}</h3>
                    <h4>{person.profession}</h4>
                    <p>Known for {person.accomplishment}</p>
                </li>
                )}
            </ul>
        </>    
    );
}

function RenderScientists() {
    return (
        <article>
            <h1>Scientists</h1>
            <ListSection title="Chemists" people={chemists}/>
            <ListSection title="Everyone Else" people={everyoneElse}/>
        </article>
    );
}

const recipes = [{
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
}, {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: ["pizza crust", "pizza sauce", "mozarella", "ham", "pineapple"],
}, {
    id: "hummus",
    name: "Hummus",
    ingredients: ["chick-peas", "olive oil", "garlic cloves", "lemon", "tahini"],
},]

function Recipes({ recipes }) {
    return recipes.map(recipe => 
        <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <ul>{recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}</ul>
        </div>
    )
}
function Recipe({ id, name, ingredients }) {
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                {ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
            </ul>
        </div>
    );
}

function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map(recipe => 
                <Recipe {...recipe} key={recipe.id}/>
            )}
        </div>
    );
}

const poem = {
    lines: [
        "I write, erase, rewrite",
        "Erase again, and then",
        "A poppy blooms."
    ]
};

function Poem() {
    let output = [];
    poem.lines.forEach((line, i) => {
        output.push(
            <hr key={i + "-seperator"} />
        );
        output.push(
            <p key={i + "-text"}>{line}</p>
        );
    });
    output.shift();

    return (
        <article>
          {output}
        </article>
    );
}

export { RenderListElements, RenderComponentList , PackingList, RenderScientists, RecipeList, Poem };