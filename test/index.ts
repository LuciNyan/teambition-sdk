'use strict'
import { Database, DataStoreType } from 'reactivedb'
import { testable } from '../src/testable'
import { SDK, SDKFetch, Net } from '../src/index'
import { schemas } from '../src/SDK'

import './SDKFetch.spec'

testable.UseXMLHTTPRequest = false

export function createSdk() {
  const sdk = new SDK()

  const database = new Database(DataStoreType.MEMORY, false, 'teambition-sdk', 1)
  sdk.initReactiveDB(database)

  return sdk
}

export function createSdkWithoutRDB() {
  return new SDK()
}

export function loadRDB(sdk: SDK) {
  const database = new Database(DataStoreType.MEMORY, false, `teambition-sdk-test`, 1)
  return sdk.initReactiveDB(database)
}

export * from '../src/index'
export * from '../src/utils/index'
export * from '../mock/index'