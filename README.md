# once
Bind an event handler that will be triggered once, event if the event happen before the binding.

## How to install

npm i bind-once --save

## How to include

const once = require('bind-once')
import once from 'bind-once'

## How to bind

once('EVENT_NAME', handler)

## How to trigger

once('EVENT_NAME')
