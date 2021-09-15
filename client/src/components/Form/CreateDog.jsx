import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { createDog } from '../../redux/actions'
import Styles from './CreateDog.module.css'

export const CreateDog =  ({ dog }) => {
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        name: '',
        weight: '',
        height: '',
        life_span: '',
        image: '',
        temperaments: []
    })

    const handleOnChange = ({target : {name, value}}) => setValues({
        ...values,
        [name]: value
    })

    const handleOnCharge = ({target : {temperaments, value}}) => setValues({
        ...values,
        [temperaments]: value
    })
    
    const handleOnSubmit = e => {
        e.preventDefault()
        console.log('Values:', values)
        dispatch(createDog(values));
        setValues({
            name: '',
            weight: '',
            height: '',
            life_span: '',
            image: '',
            temperaments: []
        });
        alert('Dog created successfully')
    };

    // const temperamentDispatcher =  async function () {
        
    //    let todos = await dispatch(getAllTemperaments())
    //    todos = todos.payload;
    //    return todos;
    // }
    //temperamentDispatcher()

    return(
        <form className={Styles.cnt} onSubmit={handleOnSubmit}>
            <div className={Styles.card}>

            <label >Name</label>
            <input name='name' onChange={handleOnChange} type="text" value={values.name} placeholder="Waiting Dog Name" />
            <label htmlFor="">Weight</label>
            <input name='weight' onChange={handleOnChange} type="text" value={values.weight} placeholder="1 - 10" />
            <label htmlFor="">Height</label>
            <input name='height' onChange={handleOnChange} type="text" value={values.height} placeholder="20 - 30"/>
            <label htmlFor="">Life_Span</label>
            <input name='life_span' onChange={handleOnChange} type="text" value={values.life_span} placeholder="10 - 12 years" />
            <label htmlFor="">Image</label>
            <input name='image' onChange={handleOnChange} type="text" value={values.image} placeholder="Paste Url" />
            <label for="temperaments">Temperaments</label>
            <select className   type="checkbox" name="temperaments"  id="temperaments" size="1"  onChange={handleOnChange} value={values.temperaments}>
                {
                  [{"id":"98935a34-02b1-4bda-89f5-d9aceb9d60c1","name":"Active"},{"id":"59c6fb98-311f-407a-ba3d-8be6f5a99ff1","name":"Adaptable"},{"id":"5bfa0088-15b1-4427-bb55-d827703c38fc","name":"Alert"},{"id":"18cbd415-a88b-46fc-a2d6-23bd3008343d","name":"Adventurous"},{"id":"c496bc6d-fd50-4f98-800d-4f262a6d7c66","name":"Aggressive"},{"id":"02dcbc0e-9bf2-4af0-9ab6-997b5a1a570a","name":"Affectionate"},{"id":"cd9313ce-5a52-414a-a727-bc9f519b5986","name":"Agile"},{"id":"3a12d17a-01a0-43ba-b0de-1c2f9c6a3a73","name":"Aloof"},{"id":"791d7bd5-36a9-49b5-9dc0-e1ac9317b736","name":"Amiable"},{"id":"61b6608f-5dcc-411e-a0e0-40be13fe7201","name":"Assertive"},{"id":"c17db335-e857-4e17-9141-74c065922784","name":"Athletic"},{"id":"19cb48a9-a506-4478-9e7d-6622449b9bf1","name":"Attentive"},{"id":"a0a49e3d-30cf-4b7e-9a6e-db55b7b6d88c","name":"Benevolent"},{"id":"04086d19-6b85-4b85-9094-bd6cb769621d","name":"Boisterous"},{"id":"4f30d47b-b753-428f-9f8c-d869aa978bd0","name":"Bold"},{"id":"54b0e262-5172-4e88-9020-a262788f20a0","name":"Bossy"},{"id":"d51b6770-52cf-4fe5-b540-ecf2b65e99bc","name":"Brave"},{"id":"b2f88ef2-23d4-421b-9ffb-b480e7f40777","name":"Bright"},{"id":"59cc3c7d-9e20-463d-a656-162c54e7c7f5","name":"Bubbly"},{"id":"ed3bf342-4328-48f2-8b0d-58facfb0cf27","name":"Calm"},{"id":"cfc29c3c-a127-487a-a3e7-d54c38587c9f","name":"Charming"},{"id":"551b4aea-458b-47a1-ae3c-7fb59128653a","name":"Cat-like"},{"id":"7cbabb1f-1589-4782-9eb6-c75798296d56","name":"Cautious"},{"id":"d499be68-73c0-45cf-83d7-5b4ed641b642","name":"Cheerful"},{"id":"0c17efaf-bfb0-4015-b4c3-c74073cc56db","name":"Clever"},{"id":"aeff8ae1-6c28-447e-8f10-663d43248d1a","name":"Clownish"},{"id":"670cf85c-b954-41fe-be55-16161817b1a1","name":"Companionable"},{"id":"e597d01b-dcf6-47f0-a120-7d656e42a5f3","name":"Composed"},{"id":"85e1088e-e0f5-4fa3-82c5-ec7a1ddb5b51","name":"Confident"},{"id":"8b6bba32-7f37-4685-9f8d-377fe6d6a603","name":"Cooperative"},{"id":"3204ca77-7608-4fae-87ef-079b4fb27e85","name":"Courageous"},{"id":"3aadf9f1-d4a9-424b-be91-645b5582399b","name":"Cunning"},{"id":"305e2d19-473d-4154-8034-3e06563781a8","name":"Curious"},{"id":"37f0a50c-6161-4526-87d8-9a109d0c04ee","name":"Determined"},{"id":"50c175cf-365a-40bb-89fa-cf391eb7de44","name":"Devoted"},{"id":"3c56f54f-7884-41fd-9d22-fca10e107653","name":"Dignified"},{"id":"6f304ca7-9fcd-4dce-af2a-b30b00f89851","name":"Diligent"},{"id":"b45083bf-03f5-4c7d-b288-fb1dad9835ee","name":"Docile"},{"id":"34e5b133-2f24-4535-9ad4-4063acaadb19","name":"Dominant"},{"id":"116996b1-234a-4f49-b05b-8bbd72549f6f","name":"Dutiful"},{"id":"9ebfe348-202d-479e-be0d-11b4f388b279","name":"Eager"},{"id":"a3d3493d-d253-4a04-b596-a1af407b5606","name":"Easygoing"},{"id":"f854535e-0b91-46c0-b1d9-04b8ab41b77e","name":"Energetic"},{"id":"3906e49d-d54c-4bfb-8771-37676b797408","name":"Even Tempered"},{"id":"d4c7ef16-a29b-42c3-b8a1-76c793f7bca4","name":"Excitable"},{"id":"09c5f1f7-1436-43bd-9cfb-b6f216275399","name":"Extroverted"},{"id":"a6ae9b11-9eb6-4687-b668-29b59b3134dc","name":"Faithful"},{"id":"f0f95766-bd73-43f2-8549-6d273a157cbf","name":"Familial"},{"id":"8ade86c0-1031-494c-87f4-66756045bee9","name":"Fast"},{"id":"7007a1aa-b8db-4310-9b54-2b44b595c045","name":"Fearless"},{"id":"5bdab267-3554-4ee2-bfb9-978fb4ee2eb6","name":"Feisty"},{"id":"13ed7a43-0966-4eed-b6a4-6e3ba1cce8b3","name":"Fierce"},{"id":"73f1bc87-df3a-48d9-8435-09ab886f6970","name":"Friendly"},{"id":"ec54c49b-fb20-45c8-8c07-003aa95686b3","name":"Fun-loving"},{"id":"b06f13a4-fc38-4f58-90c8-1b18ea664835","name":"Gay"},{"id":"1fe30daf-4132-4758-a37b-fd5c83294792","name":"Generous"},{"id":"27e2a8f8-8ecb-4874-a88e-95fe15168449","name":"Gentle"},{"id":"98cf4d40-728c-4569-ae75-b0e873111c36","name":"Good-natured"},{"id":"f208e276-5493-4b38-a925-0031b24afcea","name":"Good-tempered"},{"id":"0c88569b-261f-4604-b78d-eed5f460789f","name":"Great-hearted"},{"id":"1dbb797d-8e82-4744-bc23-e01ceb61fd0a","name":"Happy"},{"id":"a1e94187-55e1-48c5-aa53-be416b121825","name":"Hard-working"},{"id":"e5f0e774-d956-4d25-8393-53d1fe2c8d49","name":"Hardworking"},{"id":"ed406246-63b3-4c46-b59a-f8ecd536d71f","name":"Hardy"},{"id":"190c4f91-9ac6-42ae-bb4d-fe2f904a0069","name":"Independent"},{"id":"70d31487-5c59-42e2-b83a-c33bdf021dcc","name":"Inquisitive"},{"id":"a987e74e-abba-475d-b175-bdd3166de563","name":"Intelligent"},{"id":"ddcb27f6-4d5a-4500-9de9-476a553d0b55","name":"Joyful"},{"id":"7b04d40a-9650-471a-b7ae-a3cdc79580ca","name":"Keen"},{"id":"de0c2ebe-e29e-4d4b-9953-ecb9cabbae0d","name":"Kind"},{"id":"159af565-306d-4c71-8b35-c4f5d49db7cc","name":"Lively"},{"id":"4cfc848f-c967-47b6-b9e3-4d99dfd32829","name":"Lovable"},{"id":"260f1156-b28b-4fee-92b0-0bffdf4fff67","name":"Loving"},{"id":"de01b6f6-ff71-432f-9184-f04ffff0d3fc","name":"Loyal"},{"id":"a85f59f6-85ab-4b7e-a382-1283a2535da3","name":"Merry"},{"id":"a9899fb8-db10-4246-bbb3-2b49692cfc29","name":"Mischievous"},{"id":"8fe6e9ef-d23d-4cc6-9dc1-78952ed73617","name":"Obedient"},{"id":"d7884d0b-c9a9-4de8-9698-a46994dddeba","name":"Opinionated"},{"id":"bcb6b0b9-11f8-435b-8b69-b7b9c6b5d75a","name":"Outgoing"},{"id":"716cb095-2565-45bc-aff8-e0b9b1657d5b","name":"Patient"},{"id":"d472ae97-dcbe-4f9e-b324-77d410a22344","name":"People-Oriented"},{"id":"6cfc1b75-9ee1-46b9-899f-e3b86d5454cc","name":"Playful"},{"id":"1e223773-f679-421e-8e2c-c0e32c0835ca","name":"Powerful"},{"id":"2ae91ed3-5ad5-453f-9043-fd383c5442a3","name":"Protective"},{"id":"27c62af3-864c-451c-9b80-a39ffe981129","name":"Proud"},{"id":"9ad8531e-846c-44e6-bcda-c5f141855dc6","name":"Quick"},{"id":"7e4adcff-9e6c-454e-bb18-6ce559a5d4f0","name":"Quiet"},{"id":"01a75c04-971a-4c3d-bba0-b9e6a79bb47c","name":"Rational"},{"id":"f08672c2-652e-4fdc-83fc-c7490efe7df7","name":"Receptive"},{"id":"80dc0b65-e76a-40d2-a4f3-f327fb4f403a","name":"Refined"},{"id":"8cc31374-15bc-47ca-9bf9-98f521b9bfee","name":"Reliable"},{"id":"904f4bb9-d019-4648-b14b-23c5adefd71b","name":"Reserved"},{"id":"07af7642-1c30-40c8-aa53-c8a5777a1176","name":"Respectful"},{"id":"7a21fa74-0653-4af0-9f76-bc600469b704","name":"Responsible"},{"id":"284488bf-0506-4b13-bb6f-f5f6f13b5b72","name":"Responsive"},{"id":"8293f069-aa53-4fd9-841d-ff68e1b6ae68","name":"Rugged"},{"id":"008a5df9-bae1-40c3-a208-febb2caa58fa","name":"Self-assured"},{"id":"c5e10705-2f73-49c9-851e-318e0901b507","name":"Self-confidence"},{"id":"81939ccd-a86b-4448-a0ed-2f08dff56999","name":"Self-important"},{"id":"5c75b657-d0bc-420c-ac9e-a1f40c51263a","name":"Sensitive"},{"id":"4690662b-1bb7-451a-beb6-b0d85ec288da","name":"Sociable"},{"id":"0abc8556-32c8-46d4-a6f5-a95d14df7d3a","name":"Spirited"},{"id":"f3951985-180e-4f3f-aa03-eb9099b2204b","name":"Spunky"},{"id":"dc517ac2-c2a8-4be9-971f-f654a294e86e","name":"Stable"},{"id":"f5bd2596-6053-469f-b849-6a4f1629c394","name":"Steady"},{"id":"6acb909f-e2de-4202-9c9f-66003e7dae11","name":"Strong"},{"id":"683cd8e0-47cb-47eb-adef-33df6f75a345","name":"Strong Willed"},{"id":"e18d7be8-4fa9-4136-9eeb-c9a2ab934d05","name":"Stubborn"},{"id":"aa43d25c-f639-4ba4-97b4-152516a95c12","name":"Sturdy"},{"id":"4d3cf14e-f2af-48f5-b3a4-fd0e2a8e2b31","name":"Suspicious"},{"id":"bb6d0fbb-3e61-4d43-8cd9-819a49604167","name":"Sweet-Tempered"},{"id":"dacefa17-f771-420f-832b-39d5aa8954d8","name":"Tenacious"},{"id":"eeff87fd-5ca9-4c58-a470-c138592970b9","name":"Territorial"},{"id":"657766d3-c8b4-4795-b255-9f739a4323ef","name":"Thoughtful"},{"id":"c876f323-3cc2-4cd1-b468-be04348ce9da","name":"Tolerant"},{"id":"bbbe9125-967c-4983-a691-cc55c7057504","name":"Trainable"},{"id":"d587bfe7-7ef5-4778-bac5-59c6e3cac93f","name":"Trusting"},{"id":"ef4b8276-4fa0-4b33-93ad-384e542597ea","name":"Trustworthy"},{"id":"a8d38518-e7ad-409c-809a-0411732a3a80","name":"Unflappable"},{"id":"7bf51519-d59c-4597-b01f-7d028d914e6f","name":"Vigilant"}].map(t => (
                        <option type='checkbox' key={t.id} value={t.id}>{t.name}</option>
                        ))
                    }
            </select>
            <button className={Styles.button} id='submit'>Crear</button>
            </div>
        </form>
    );
};

export default CreateDog;