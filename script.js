const random_number = num => {
    return Math.floor(Math.random()*num)
}
const message_elements = {
    secret_level: ['TOP SECRET', 'Firs level of secret', 'Not so secret', 'Just do not tell your mother'],
    agent_name: ['Ithan Khan', 'Napoleon Solo', 'James Bond', 'Illya Kuryakin', 'Gary Unwin'],
    agent_code: ['Dirty Jack', '002', '007', 'Friday', 'Gustav'], 
    kind_of_mission: ['"you are about to die"', 'dreadful', '"child play"', 'weekend', 'global scale'], 
    enemie: ['russian KGB', 'North Korea', 'Belarus'], 
    enemie_role: ['spy', 'agent', 'morons'], 
    what_is_done: ['kidnapped', 'killed', 'stolen'], 
    object_of_action: ['Royal Prince', 'Nuclear Engineer', 'Our happiness'], 
    aim: ['restore the world force balance', 'kill them all', 'bring everything back'], 
    tools: ['"License to kill"', '"New badass Astonmartin"', 'M-16 on your back'],
    curator : ['Agent Zero', 'Steve Rogers', 'Nick Fury', 'Natasha Romanof'],
    end_of_the_message: ['God save the Queen', 'Good bless you', 'Good luck', 'We will take care of your family']
}
let random_object = Object.create(message_elements);
for (let element in message_elements) {
    let rand_num = random_number(message_elements[element].length); 
    random_object[element] = message_elements[element][rand_num];
    
}

const final_message = () => {
    return `
    Secret Level: "${random_object.secret_level}"
    ${random_object.agent_name}, we have a new ${random_object.kind_of_mission} mission for you.
    From now till the end of the mission you callsign is ${random_object.agent_code}, please remember and not forget this.
    Mission brief: ${random_object.enemie} ${random_object.enemie_role} has ${random_object.what_is_done} ${random_object.object_of_action}.
    Your aim is to ${random_object.aim}.
    Here the tool you can rely on - ${random_object.tools}.
    More detailer information you will get from ${random_object.curator}.
    ${random_object.end_of_the_message}` 
}

console.log(final_message())