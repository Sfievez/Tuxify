/*
File Name: action-reaction.dto.ts
Author: Gwenaël Hubler, Stephane Fievez, Roman Lopes, Alexandre Kévin De Freitas Martins, Bouna Diallo
Creation Date: 2023
Description: DTO for action reaction file
Copyright (c) 2023 Tux Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

import { ActionReactionInput } from "./action-reaction-input.dto";
import { ActionReactionOutput } from "./action-reaction-output.dto";
import { ActionReactionService } from "./action-reaction-service.dto";

/* The `ActionReaction` class represents an action or reaction with properties for
name, type, title, description, inputs, outputs, and uuid. */
export class ActionReaction {
    /**
     * The constructor function creates an instance of a class with properties for
     * name, type, title, description, inputs, outputs, and uuid.
     * @param {string} name - The name parameter is a string that represents the
     * name of the action or reaction.
     * @param {"action" | "reaction"} type - The `type` parameter is a string that
     * can have two possible values: "action" or "reaction". It is used to specify
     * the type of the action or reaction.
     * @param {string} title - The title parameter is a string that represents the
     * title of the action or reaction.
     * @param {string} description - The `description` parameter is a string that
     * represents the description of the action or reaction. It provides
     * additional information about what the action or reaction does.
     * @param {ActionReactionInput[]} inputs - The `inputs` parameter is an array
     * of `ActionReactionInput` objects. Each `ActionReactionInput` object
     * represents an input for the action or reaction.
     * @param {ActionReactionOutput<unknown>[]} outputs - The `outputs` parameter
     * is an array of `ActionReactionOutput` objects. Each `ActionReactionOutput`
     * object represents an output of the action or reaction. The `unknown` type
     * indicates that the output can be of any type.
     * @param {string} [uuid] - The `uuid` parameter is an optional string that
     * represents the unique identifier for the instance of the class. It can be
     * used to uniquely identify each instance of the class.
     */
    constructor(
        public readonly name: string,
        public readonly type: "action" | "reaction",
        public readonly title: string,
        public readonly description: string,
        public readonly inputs: ActionReactionInput[] = [],
        public readonly outputs: ActionReactionOutput<unknown>[] = [],
        public readonly uuid?: string,
    ) {}
}
