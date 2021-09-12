import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { createDog } from '../../redux/actions'

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
    };

    
    // const temperamentDispatcher =  async function () {
        
    //    let todos = await dispatch(getAllTemperaments())
    //    todos = todos.payload;
    //    return todos;
    // }
    //temperamentDispatcher()

    return(
        <form onSubmit={handleOnSubmit}>
            <label >Name</label>
            <input name='name' onChange={handleOnChange} type="text" value={values.name} placeholder="Waiting Dog Name" />
            <label htmlFor="">Weight</label>
            <input name='weight' onChange={handleOnChange} type="text" value={values.weight} />
            <label htmlFor="">Height</label>
            <input name='height' onChange={handleOnChange} type="text" value={values.height} />
            <label htmlFor="">Life_Span</label>
            <input name='life_span' onChange={handleOnChange} type="text" value={values.life_span} />
            <label htmlFor="">Image</label>
            <input name='image' onChange={handleOnChange} type="text" value={values.image} />
            <label htmlFor="">Temperaments</label>
            <input type="array" name="temperaments[]" value={[]} />
            <select multiple type="checkbox" name="temperaments"  id="temperaments" size="1"  onChange={handleOnChange} value={values.temperaments}>
                {
                   [{"id":"64534fe5-6a14-45b1-9b8a-0ccd8dfdc1dd","name":"Active"},{"id":"e0d43519-68b5-4b60-b095-714008d84555","name":"Adaptable"},{"id":"0fa3a72b-e5e5-418f-b70d-fdcc7d7df110","name":"Adventurous"},{"id":"e230c26b-c99c-4b25-95b6-177d07d88097","name":"Affectionate"},{"id":"901354e3-2778-475c-b5b3-d74a594ed5b6","name":"Aggressive"},{"id":"0d31a859-c8cf-4cf2-8a7d-e5ec2798444f","name":"Amiable"},{"id":"ef7b7e1d-514c-4486-b04d-7af2e9e89851","name":"Agile"},{"id":"23a35026-6a90-4e69-b715-ea4a3a715100","name":"Aloof"},{"id":"28103d48-7942-447b-8332-085c833aa68a","name":"Alert"},{"id":"80f2cdf3-6567-48ab-8c3b-7c31f8b6d5c8","name":"Athletic"},{"id":"a74a3082-8874-4b56-8f9d-8b7d152ca925","name":"Attentive"},{"id":"d73f4783-d55c-4795-8864-ec5f8471e6d5","name":"Assertive"},{"id":"3460cdf5-3077-492b-9b4f-e60c27d971a1","name":"Benevolent"},{"id":"d1b5f6db-d783-4b1f-9125-cea7a8dccffc","name":"Boisterous"},{"id":"4b05277d-c97c-42ee-9b7c-cb9acd9bc240","name":"Bold"},{"id":"54321d50-1007-493a-9fa4-ab8472326be7","name":"Bossy"},{"id":"0404a170-1898-4cbb-b240-5f2b00d2c5dd","name":"Brave"},{"id":"06326913-b012-4a6b-98a5-08092c241c94","name":"Bright"},{"id":"93c82c10-d0bf-43da-bae6-9b03021fbe2b","name":"Bubbly"},{"id":"051b7451-8e45-444e-b394-915a28350a87","name":"Calm"},{"id":"a17d23a1-d406-4b2c-b8de-3b1a2a0ccf82","name":"Cat-like"},{"id":"1eae807c-5c13-4b70-a673-b1b4153bdbad","name":"Cautious"},{"id":"cc500266-92f0-498d-b616-52de6b7c93f1","name":"Charming"},{"id":"ca52e56e-d789-4d8c-87a5-dd31133fbce3","name":"Cheerful"},{"id":"4e96e97a-6e2e-4711-a9d0-58f0b154ff0e","name":"Clever"},{"id":"aec6afa5-fed7-41c6-8ee8-73571b3a8e11","name":"Clownish"},{"id":"e67c8363-0138-4dc1-bae0-0a889cfec9ec","name":"Confident"},{"id":"cc3e3adf-31f3-45ec-b882-131a29403a0e","name":"Companionable"},{"id":"21bae6a5-2806-4502-94c7-dbaed60d6568","name":"Composed"},{"id":"0f0dc000-3007-4738-bbe6-5ac90ee531e1","name":"Cooperative"},{"id":"c9defd3c-e0ac-4578-a638-f49e9d5bcbaf","name":"Courageous"},{"id":"dc3b3f1a-7834-40fe-9edb-d7a3ace55b4a","name":"Cunning"},{"id":"98217742-80d1-4d5e-bef1-6153658addf0","name":"Curious"},{"id":"1dd1378b-84e8-411e-bc3f-b0942b9331ff","name":"Determined"},{"id":"616ee8b6-0ea9-4731-b1f6-f3525c2a6ce6","name":"Devoted"},{"id":"61f48144-0a47-4d80-bee8-aa08a99c7125","name":"Dignified"},{"id":"7edbc236-f210-4c4d-a74f-b451f11526d6","name":"Diligent"},{"id":"d3495a49-4f88-4c5c-ad30-f1c1de00cc98","name":"Docile"},{"id":"5ff0feaa-5e03-45a4-84a0-5dd43d4ef9f1","name":"Dominant"},{"id":"e53789a2-bab8-43ba-8559-1dbf2c9e2c5c","name":"Dutiful"},{"id":"bbf6b44f-d613-4025-bac5-766a27bb911a","name":"Eager"},{"id":"67a0312e-8fee-4b41-b881-64976f1a647c","name":"Easygoing"},{"id":"df9beb93-8eab-40d2-8bda-cbfa6e5f79dd","name":"Energetic"},{"id":"b4fdd5a5-e89d-457c-9ece-8d8b669c3862","name":"Even Tempered"},{"id":"bd454e73-2941-4043-a0a9-4a281ad754e8","name":"Excitable"},{"id":"5824a9e7-4959-4963-87f5-6000385623da","name":"Extroverted"},{"id":"d0be0919-dab2-4943-aa95-6ef34dcb33c3","name":"Faithful"},{"id":"04b27886-a3ac-4f7d-8c01-c4392d50402b","name":"Familial"},{"id":"98c0fbba-1ce7-42f5-8f32-93be6f3a677a","name":"Fast"},{"id":"0c83e1e9-bab7-4db3-b257-069ed2e7549f","name":"Fearless"},{"id":"ac8266bf-1e35-45c5-96ac-b6a87c34542f","name":"Feisty"},{"id":"e388d1e9-b731-435d-b28c-c7df65c234ae","name":"Fierce"},{"id":"a3af53f8-64c4-473b-936d-74a292c712d3","name":"Friendly"},{"id":"4ff47567-d5cf-4518-983f-94903e889090","name":"Fun-loving"},{"id":"deb7288b-7889-4e03-990e-2eb77c86ef0d","name":"Gay"},{"id":"ac31ce64-1690-4d74-806a-9cbe3d8d0be8","name":"Generous"},{"id":"0eb49388-2174-4d03-911d-a82c55a7291f","name":"Gentle"},{"id":"a116ae6a-fed6-42c7-ba68-40c8a156c02f","name":"Good-natured"},{"id":"82af7961-01db-4f22-9cd4-cb62570eb2d9","name":"Good-tempered"},{"id":"726cc6b7-55e7-4964-a85d-71cc54c94e22","name":"Great-hearted"},{"id":"8fdabfa1-1d1a-436d-9b77-66364ecc6c9c","name":"Happy"},{"id":"be4efeee-3c70-4c59-b069-0737c5e1359a","name":"Hard-working"},{"id":"01e11d46-f045-40eb-8e89-25333f43dfa3","name":"Hardworking"},{"id":"df629cdd-cfc7-4cd2-af69-b5fc3a1826f9","name":"Hardy"},{"id":"bd2237ff-ccf2-407a-93b2-956df9b96a37","name":"Independent"},{"id":"96fd487c-3904-49e2-adc5-5fce77894d96","name":"Inquisitive"},{"id":"902f7d1b-44bc-4e9d-a2cd-eac340423f8f","name":"Intelligent"},{"id":"71da9985-e3b7-42ed-871a-560ec1e76faa","name":"Joyful"},{"id":"4a15eb2f-7fcd-4c7f-809a-10a5f11f07f5","name":"Keen"},{"id":"960c8ffb-0776-4770-b738-f13a3d9b5888","name":"Kind"},{"id":"668a598d-5e15-47ae-8b99-651203af04f0","name":"Lively"},{"id":"31c2b31d-58e9-491b-8c47-9a86b193d626","name":"Lovable"},{"id":"b0a471af-c753-4ed4-9f45-08d29493ea94","name":"Loving"},{"id":"6a65c858-fcaf-4015-b604-f63f18bcf960","name":"Loyal"},{"id":"f3fbcc8b-c157-4fe5-9029-db875a118e67","name":"Merry"},{"id":"f069f2c0-34f5-483e-9881-ffc256004ea1","name":"Mischievous"},{"id":"c4b8cef1-96e5-4ba3-a246-0112e483b343","name":"Obedient"},{"id":"17f7a1bf-a9ef-4183-b582-5a592c357360","name":"Opinionated"},{"id":"652ef7db-68ad-4d2b-8ce8-ed195700f6d6","name":"Outgoing"},{"id":"7d277c7e-c6df-4c03-972a-543e75237c49","name":"Patient"},{"id":"ca38ce30-7e8a-4f15-b43b-74d125f94c38","name":"People-Oriented"},{"id":"13ecfa31-9dc3-44d2-93ce-31c04ee9f424","name":"Playful"},{"id":"d763e486-90dd-411a-9c12-22c93dc34e75","name":"Powerful"},{"id":"86dd0643-8c94-4223-ab1c-4412fafc0088","name":"Protective"},{"id":"7ffb5e51-5f6d-4643-9a44-0f2f7ef68f82","name":"Proud"},{"id":"d714641b-8fb7-4606-bc97-7cd0f19e0c7b","name":"Quick"},{"id":"c1674472-960e-48a1-870a-7d15a9771c76","name":"Quiet"},{"id":"69d3a009-7982-4647-b040-b706e2147b1a","name":"Rational"},{"id":"dc49f076-ac42-484a-9f15-730f5001bcb0","name":"Receptive"},{"id":"b9f9ca95-f147-465c-b6d4-f6e5d1814b62","name":"Refined"},{"id":"aefa3bf9-d5cc-48d0-9d81-ff82de666d9b","name":"Reliable"},{"id":"0059f314-9b96-4950-91ab-594333990cbd","name":"Reserved"},{"id":"843ccade-8d85-4f68-a097-0e46e82d0e95","name":"Respectful"},{"id":"e063e209-cff3-4ab6-9be8-9692bc6318d1","name":"Responsible"},{"id":"3b7c7364-038c-44d1-8a74-ff8033495b43","name":"Responsive"},{"id":"3a2e7aa4-4972-4342-a72f-aa8c0d6a4a23","name":"Rugged"},{"id":"9907fe7e-4d5f-47b9-90f5-271aa0dedf85","name":"Self-assured"},{"id":"b67ef5bc-52c3-4c32-be53-c3f4a3da1cd4","name":"Self-confidence"},{"id":"233322b0-d21d-40c9-818b-16b4fde3e140","name":"Self-important"},{"id":"d6ad7b61-e494-44cf-8767-dcab1f26b59e","name":"Sensitive"},{"id":"834f27e8-a6c5-499c-9ae2-93e015d5fb79","name":"Sociable"},{"id":"90194c36-4ac0-4af9-aa75-0b9aecdfdc29","name":"Spirited"},{"id":"85c1e815-76ae-4e87-818c-c8592f6b18f8","name":"Spunky"},{"id":"36be1dd7-b00d-4f9a-bab1-d87be411ac4b","name":"Stable"},{"id":"428f6eee-2f06-4fc8-96c6-f8576b339cdf","name":"Steady"},{"id":"9c67d8bb-3956-4cab-895d-52609ce546a6","name":"Strong"},{"id":"1364dec3-50e8-47ae-92e2-df4c400edfb7","name":"Strong Willed"},{"id":"9eb0730d-ca97-43ef-bfb5-212fa809f24a","name":"Stubborn"},{"id":"6c0ca3c8-be22-41af-811d-3a4dc43889af","name":"Sturdy"},{"id":"01a052d8-907a-4750-8234-82f3171eceaf","name":"Suspicious"},{"id":"d6101b49-5a38-4052-849a-edacef07a4f1","name":"Sweet-Tempered"},{"id":"71a47e5e-9e42-4f53-92ad-6a3b262e3ac8","name":"Tenacious"},{"id":"dd190030-5a15-499e-860d-0d4a5f2bd888","name":"Territorial"},{"id":"253206f8-3933-4a9f-a2b8-8dbd1f497b8c","name":"Thoughtful"},{"id":"ca8c6035-6bfb-4214-a9fb-268111a6cc0c","name":"Tolerant"},{"id":"ebebedab-fb8d-485c-b618-88ae041a88bf","name":"Trainable"},{"id":"e1df11ed-8350-45f2-98d3-473c02f8037d","name":"Trusting"},{"id":"9cbcb0d2-4fcb-4c75-bbbe-cb23f2862398","name":"Unflappable"},{"id":"8ce18f38-0ea5-487c-870c-709347006ebf","name":"Trustworthy"},{"id":"c861f4b1-16cb-4663-bc2b-ae3dd93d5299","name":"Vigilant"},{"id":"fe59fe41-4c7e-4458-9c20-e81aedc2ea97","name":"Vocal"},{"id":"3a03d336-2e65-48e1-83fb-d5830e965ce3","name":"Watchful"},{"id":"06353f88-626a-430e-b7b0-b295defbb74d","name":"Wild"},{"id":"b3cd7200-49dd-4681-9ceb-b08079f048cc","name":"Willful"}].map(t => (
                        <option key={t.id} value={t.id}>{t.name}</option>
                        ))
                    }
            </select>
            <button>Crear</button>
        </form>
    );
};

export default CreateDog;