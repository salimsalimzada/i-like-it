import { useSyncExternalStore } from "react";

interface Store<T> {
	get: () => T;
	set: (newValue: T) => void;
	subscribe: (callback: (newValue: T) => void) => () => void;
}

function createStore<T>(initialValue: T): Store<T> {
	let value: T = initialValue;

	const subscribers = new Set<(newValue: T) => void>();

	function get(): T {
		return value;
	}
	//  Observer pattern
	function set(newValue: T): void {
		if (value === newValue) return;
		value = newValue;
		subscribers.forEach((callback) => {
			callback(value);
		});
	}

	function subscribe(callback: (newValue: T) => void): () => void {
		subscribers.add(callback);
		return () => {
			subscribers.delete(callback);
		};
	}

	return {
		get,
		set,
		subscribe,
	};
}

function useStore<T>(store: Store<T>) {
	const state = useSyncExternalStore(store.subscribe, store.get);
	const setState = store.set;
	return [state, setState] as const;
}

function useStoreValue<T>(store: Store<T>) {
	return useSyncExternalStore(store.subscribe, store.get);
}

export { createStore, useStore, useStoreValue };
