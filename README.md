# message_generator

This is the program which create random message to secret agent.

### Description

Program loop through the general object with base statement for the message.
On each iteration random_number function pull off the one item of array.
In the end of the loop we have a new object with the **same keys** as **message_elemets** object.

Fuction **final_message** uses **random_object** key-values to buid the new random message.

Program also give an opportuninite to modify the **message_elemets** object without any consequenses. After modification was done you only need to add new values to **final_message** 