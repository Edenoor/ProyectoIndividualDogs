import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { createDog, getAllTemperaments } from '../../redux/actions'

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
                    [{"id":"49f7ea2e-ec73-4d7c-8d7f-b00b39f49428","name":"Active"},{"id":"a37cc72f-4f3b-4001-8b16-e2f33d2f6348","name":"Adaptable"},{"id":"3366cac3-8e1a-42d9-a52e-65541516d426","name":"Adventurous"},{"id":"6a0c2c3d-8944-4cc2-a10a-9e352a6fc182","name":"Affectionate"},{"id":"1ff2bc51-8b69-445e-bc5e-68b0fba0e830","name":"Aloof"},{"id":"d151449e-5f76-4b55-9e1c-6cda3ddb1139","name":"Agile"},{"id":"d797520e-cbe9-49eb-bfde-0e3847b19b9e","name":"Aggressive"},{"id":"f849abbc-7e43-4cf9-841e-282c78fcbed2","name":"Assertive"},{"id":"43064fa7-e919-4792-8559-e8ff742f2156","name":"Alert"},{"id":"8544789a-3534-4068-afea-cd4d130fac30","name":"Amiable"},{"id":"e8ab7398-850e-4b34-ad1f-24768da6ca18","name":"Athletic"},{"id":"c97d73be-8de7-47b2-87b2-c7dd75e47e28","name":"Attentive"},{"id":"e15f3fb6-bc65-411b-8799-f4274dbde18d","name":"Benevolent"},{"id":"c0938d3a-42ca-4643-b51d-85d9e1c6d996","name":"Boisterous"},{"id":"03c73351-023b-4afc-a42b-44a1bc32ce8e","name":"Bold"},{"id":"caee5323-7dca-4c2a-a060-f8fba5f2b087","name":"Bossy"},{"id":"5483e0f7-800c-466a-8472-bc0106505ece","name":"Brave"},{"id":"a4b7ee24-6b58-4510-b9e1-b54ab077fd1d","name":"Bright"},{"id":"00e1545b-6a39-41bb-836d-00f279c23cbd","name":"Bubbly"},{"id":"66b86c36-5463-403d-bb09-8267bff75e6b","name":"Calm"},{"id":"33102d4b-593e-4992-9eb0-37af08fef1d2","name":"Cat-like"},{"id":"c0dbfcc7-84ff-42b0-a6a1-506cfbb7a91b","name":"Cautious"},{"id":"ea3de5b8-d72e-48d8-9a22-ccd32e20f87f","name":"Charming"},{"id":"f5acd06c-1d12-4830-8971-00798ba7978a","name":"Cheerful"},{"id":"7bcc8c7f-dd67-4429-8f33-a12c526b566b","name":"Clever"},{"id":"3dcb290f-1290-43a3-bd80-f500b9fd1a71","name":"Clownish"},{"id":"91b365d3-c012-4a51-bcca-81c70a48b767","name":"Companionable"},{"id":"ddd24b87-5cf3-47b4-91eb-5b15c6400e6a","name":"Composed"},{"id":"d6666ae1-40f0-4599-b161-6a0be952115f","name":"Confident"},{"id":"461b8a54-905c-457f-8c8f-1b2ca74012df","name":"Cooperative"},{"id":"04182466-f85d-4ee7-898d-d18c9f1d7b67","name":"Courageous"},{"id":"55c0b67d-1512-4186-abe4-175d8e1bf77f","name":"Cunning"},{"id":"bb48ac9f-5247-4f7e-94b0-0ca4f512ed59","name":"Curious"},{"id":"29a44d25-de5b-4ff4-8beb-fef74d760755","name":"Determined"},{"id":"bc82565e-1101-44c5-bb26-1a788c5b783e","name":"Devoted"},{"id":"e7a16ccf-6a7e-4def-977d-bdb9b322569a","name":"Dignified"},{"id":"64026bba-305b-4f74-bdc4-ea02100b70bf","name":"Diligent"},{"id":"35bdcf54-1e37-485a-b2cb-6886b7466da1","name":"Docile"},{"id":"67b06bf8-30a0-4964-8aa6-6b0fa7b65500","name":"Dominant"},{"id":"db1831ce-640d-4f03-aef4-4b7f6c0e196e","name":"Dutiful"},{"id":"84c06ffd-2e6a-4c07-862d-33ba49c7216d","name":"Eager"},{"id":"473b3f1a-d91d-4778-8023-ff0bb9967d33","name":"Easygoing"},{"id":"9793c78c-29a5-45be-8e53-0aac33ae726e","name":"Energetic"},{"id":"19e9b2f5-1028-4880-9a13-e4b56f33601f","name":"Even Tempered"},{"id":"b430ba17-0954-485c-ab74-e9ffd56aaa34","name":"Excitable"},{"id":"9c01c0ca-c97f-4ab5-91a8-06caafcc5187","name":"Extroverted"},{"id":"eb8004b5-65e4-4a78-9169-7e818143718c","name":"Faithful"},{"id":"85288425-3e75-4fda-8506-500d7d46cce2","name":"Familial"},{"id":"8ecef859-ada5-40b3-82cc-fd3f1106016b","name":"Fast"},{"id":"87895405-cae2-4298-9b0a-926e12e2eaa5","name":"Fearless"},{"id":"1f65ecbc-253d-41d1-b2a2-3f67c40839f9","name":"Feisty"},{"id":"366b020a-0620-4d9a-a84b-b09c380c0f46","name":"Fierce"},{"id":"84bb97c3-f2cc-4e71-bd2d-8d276ab4ecf6","name":"Friendly"},{"id":"96bbf4b7-bd2b-443b-9b5a-f17491044180","name":"Fun-loving"},{"id":"684d703b-b6c6-4c87-adbd-a347d7203116","name":"Gay"},{"id":"2bf6d607-5418-46df-9f26-a0945b3f3dfd","name":"Generous"},{"id":"1324542e-cdfb-41bd-b28f-5fb8606f1abd","name":"Gentle"},{"id":"b31028c1-278c-44c9-93f6-b6a61f94efb6","name":"Good-natured"},{"id":"a8405f01-9603-49d4-a589-cfbc613e841e","name":"Good-tempered"},{"id":"2692e1e7-f452-4af2-bec4-285f77a198c1","name":"Great-hearted"},{"id":"1cbca8d1-0c6b-460f-8688-3dc1f76faf1f","name":"Happy"},{"id":"5dd047ba-ada2-4b3f-99b4-8e50fbe33d15","name":"Hard-working"},{"id":"ee88504d-bc58-4b19-9e99-5d4e505546ae","name":"Hardworking"},{"id":"2cec9888-f267-4c28-9149-ce205a193fad","name":"Hardy"},{"id":"0410352a-d0f9-4d20-8bc7-76e55077f6e8","name":"Independent"},{"id":"8b1f731a-471d-4283-88f6-7b99060324f3","name":"Inquisitive"},{"id":"326a3553-6d09-4579-8b50-0c9a9fb8c457","name":"Intelligent"},{"id":"ef7b27c6-a415-4aa8-aea8-ec40f79ab43d","name":"Joyful"},{"id":"67259ae5-946d-4dbf-980e-b4d5ad92a270","name":"Keen"},{"id":"0783480f-5b39-464b-bc49-ff5b58d47041","name":"Kind"},{"id":"0f4263d6-b2da-4bd1-be58-6e1d779ae821","name":"Lively"},{"id":"592e9901-89ac-4c8d-aa01-ce932b53cb08","name":"Lovable"},{"id":"1d84ec96-bf64-4400-b4cd-90727b5dd74f","name":"Loving"},{"id":"3e774341-06bf-4b05-b245-aff5fa17c744","name":"Loyal"},{"id":"2b721db3-674a-4eee-bade-06f3365e8ee2","name":"Merry"},{"id":"38369825-3aef-458f-8943-388309b40a2a","name":"Mischievous"},{"id":"c12403c9-9e84-41db-a61f-964fd8029fa4","name":"Obedient"},{"id":"2e291084-72cf-4d30-8e92-1a06ded4a159","name":"Opinionated"},{"id":"f6702efe-12af-474a-9ec5-948443acf103","name":"Outgoing"},{"id":"1575fe5e-b967-4ed4-9e17-168563d9cc4d","name":"Patient"},{"id":"a909bd9f-168c-423a-9eea-fd2f6910a0bf","name":"People-Oriented"},{"id":"cda33d61-28c8-4e80-adb1-b1596cf35dd4","name":"Playful"},{"id":"087269c5-457c-48d5-82aa-b0b662c8ff74","name":"Powerful"},{"id":"249278ad-95cc-4d96-abda-9687ff24b964","name":"Protective"},{"id":"a81ec1cc-2e9c-4beb-b309-ce2a893882c4","name":"Proud"},{"id":"a015de34-21ba-430d-9db9-747caa6ae8c3","name":"Quick"},{"id":"cc39633c-b8ef-484b-be2d-76a39de01178","name":"Quiet"},{"id":"8f7889fa-89e2-4f6a-8577-713c73409956","name":"Rational"},{"id":"0db23ecf-9dd0-4c0f-9721-4917178d1d65","name":"Receptive"},{"id":"e245609a-a772-4c36-bda1-7fee5151d00d","name":"Refined"},{"id":"33de0a20-fa69-4f79-a867-c787cc800523","name":"Reliable"},{"id":"87659b9e-6cdb-4700-955a-d9553290cee8","name":"Reserved"},{"id":"a2b2f1ba-6bee-4f7a-8bd7-2e24f57c94de","name":"Respectful"},{"id":"b1fe3c10-cb9f-44cf-822a-53a1da14f553","name":"Responsible"},{"id":"1348fbd4-8cf2-4d80-b31b-000d09ec6f03","name":"Responsive"},{"id":"8f94c793-e6eb-41c0-a6b5-b4ad58cd706a","name":"Rugged"},{"id":"ac8d353a-3508-4c41-966b-7e0a451397a2","name":"Self-assured"},{"id":"f4f8c2ca-9d2b-4d45-998a-a070e435e88f","name":"Self-confidence"},{"id":"54d9223e-bfd5-4967-a391-b72e2919ef29","name":"Self-important"},{"id":"ff9741cf-cc35-4c83-a3e0-a821a7ba8a7f","name":"Sensitive"},{"id":"c5c31f08-7233-42a0-bcb4-5a4aa294d0dc","name":"Sociable"},{"id":"7c8cb26b-4a36-4ec1-8022-de9c4de10597","name":"Spirited"},{"id":"9ec08167-e0c7-4e4a-a63e-bf2711a82397","name":"Spunky"},{"id":"1d319b68-df3c-42ec-bd2f-2fda44960b00","name":"Stable"},{"id":"f79c049b-5d2f-486b-b0c3-921b0cd6edaa","name":"Steady"},{"id":"423364e0-e1f8-493a-9b93-a913f5899e0b","name":"Strong"},{"id":"0949a5ac-42d5-41ca-8a4a-26e9090681c3","name":"Strong Willed"},{"id":"c438940e-d183-40ea-a3ee-b5d28924378a","name":"Stubborn"},{"id":"9225c290-585a-49a9-a925-f9e274b49364","name":"Sturdy"},{"id":"2b4b6392-23ef-4cf4-949b-bdb639034d5c","name":"Suspicious"},{"id":"43ddd833-8f8e-46cf-975e-3ef14119ffb8","name":"Sweet-Tempered"},{"id":"3ad3c61b-f1ed-4c9a-b43f-60b911a3d764","name":"Tenacious"},{"id":"7cfa3a68-2415-4d90-a6f7-43373b63e0f2","name":"Territorial"},{"id":"863306ca-aaba-411a-8af6-4e23840327e8","name":"Thoughtful"},{"id":"991cd268-bceb-4925-b7a5-2c0aad600f77","name":"Tolerant"},{"id":"d16af065-c6a7-4401-a2a2-472a48e120aa","name":"Trainable"},{"id":"72fe9ba0-d3c2-4fe9-ba84-59994dbd8642","name":"Trusting"},{"id":"dd5545da-cff3-4601-8f54-92170815bca8","name":"Trustworthy"},{"id":"4c49aae5-1350-4585-94cd-43ebbdcd7c2f","name":"Unflappable"},{"id":"0b8725fc-9d81-4b87-875c-2eb0a3d5cd2a","name":"Vigilant"},{"id":"71f60fa1-36d3-4614-9e76-187b7f931da2","name":"Vocal"}].map(t => (
                        <option key={t.id} value={t.id}>{t.name}</option>
                        ))
                    }
            </select>
            <button>Crear</button>
        </form>
    );
};

export default CreateDog;